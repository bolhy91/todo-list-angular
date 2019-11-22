import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {share} from 'rxjs/operators';
import {Todo} from '../../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService implements OnDestroy{
  private onSubject = new Subject<{ key: string, value: any }>();
  public changes = this.onSubject.asObservable().pipe(share());
  localSt: [];

  constructor() { }
  // Destroy el servicio al cerrar la pestana
  ngOnDestroy(): void {
    this.stop();
  }
  // Inicializar la escucha del servicio
  public start(): void {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }
  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      let v;
      try {
        v = JSON.parse(event.newValue);
      } catch (e) {
        v = event.newValue;
      }
      this.onSubject.next({key: event.key, value: v});
    }
  }
  public store(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
    this.onSubject.next({ key, value: data});
  }
  public getLocalStorage(): Todo[] {
    for (let i = 0; i < localStorage.length; i++) {
      this.localSt = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    return this.localSt;
  }
  private stop() {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
    this.onSubject.complete();
  }
}
