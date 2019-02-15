import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-list',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of _users; let i=index">
          <td>{{ i }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
    <!-- setter 사용 관련 추가 -->
    <div class="panel panel-default">
      <div class="panel-body">
        <p>관리자: {{ cntAdmin }}</p>
        <p>개발자: {{ cntDeveloper }}</p>
        <p>디자이너: {{ cntDesigner }}</p>
      </div>
    </div>
  
  
  `,
  styles: []
})
export class UserListComponent implements OnInit {

  // 부모 컴포넌트가 전달한 상태 정보를 입력 프로퍼티에 바인딩한다.
  // @Input 데코레이터를 이용한 부모 컴포넌트에서 자식 컴포넌트로 상태 전달
  // @Input() users: User[];

  // 만약 부모 컴포넌트에서 실행한 프로퍼티 바인딩의 프로퍼티명과는 다른 프로퍼티명을 자식 컴포넌트에서
  // 사용하려면 아래와 같이 @Input 데코레이터에 프로퍼티 바인딩의 프로퍼티명을 인자로 전달하고 사용하고자
  // 하는 프로퍼티명을 선언한다.
  // @Input('users') myUsers: User[];


  // setter사용 관련 로직
  // _users는 내부에서만 사용할 private 프로퍼티이다.
  private _users: User[];

  // 역할별 사용자 카운터
  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  // 부모 컴포넌트가 전달한 정보에서 필요한 정보를 추출하여 컴포넌트 프로퍼티에 바인딩한다.
  @Input()
  set users(users: User[]) {
    if (!users) { return; }

    this.cntAdmin = users.filter(({role}) => role === '관리자').length;
    this.cntDeveloper = users.filter(({role}) => role === '개발자').length;
    this.cntDesigner = users.filter(({role}) => role === '디자이너').length;
    this._users = users;
  }

  get users(): User[] {
    return this._users;
  }



  constructor() { }

  ngOnInit() {
  }

}
