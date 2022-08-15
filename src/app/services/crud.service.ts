import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }
  getAllTODOLists(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/to_do_lists');
  }
  postTODOList(tit, desc, dd, cd): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/to_do_lists', {
      title: tit,
      description: desc,
      dueDate: dd,
      creationDate: cd
    });
  }

  deleteTODOList(idlist): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/to_do_lists/' + idlist);
  }
}
