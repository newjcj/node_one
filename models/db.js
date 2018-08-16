import {Table} from 'typeorm'
@Table()
export class User {
  @Column()
  id: number;
}
