import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EngagementToolInterface {
  id?: string;
  tool_name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EngagementToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_name?: string;
  user_id?: string;
}
