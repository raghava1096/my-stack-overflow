export interface Owner {
  account_id: string;
  link: string;
  display_name: string;
  user_id: string;
  profile_image: string;
}

export interface QuestionList {
  title: string;
  link: string;
  answer_count: number;
  is_answered: boolean;
  question_id: string;
  creation_date: number;
  tags: string[];
  last_activity_date: string;
  accepted_answer_id: string;
  owner: Owner;
}
