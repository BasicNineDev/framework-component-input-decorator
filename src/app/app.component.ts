import { Component } from '@angular/core';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
         {{title}}!
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="form-inline">
          <div class="for-group" style="margin: 30px 0">
            <label for="name">Name:</label>
            <input #name type="text" id="name"
                   class="form-control"
                   placeholder="이름을 입력하세요.">
            <label for="role">Role:</label>
            <select #role id="role" class="form-control">
              <option>관리자</option>
              <option>개발자</option>
              <option>디자이너</option>
            </select>
            <button type="button"
                    class="btn btn-default"
                    (click)="addUser(name.value, role.value)">사용자 추가</button>
          </div>
          <app-user-list [users]="users"></app-user-list>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'component-interaction';

  users: User[];

  constructor() {
    this.users = [
      new User(1, 'Lee', '관리자'),
      new User(2, 'Baek', '개발자'),
      new User(3, 'Park', '디자이너')
    ];
  }

  addUser(name: string, role: string) {
    if (name && role) {
      this.users = [...this.users, new User(this.getNextId(), name, role)];
    }
  }

  getNextId(): number {
    return this.users.length ? Math.max(...this.users.map(({ id }) => id)) + 1 : 1;
  }
}
