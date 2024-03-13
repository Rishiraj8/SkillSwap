export type PersonDetails = {
  skill_id: string;
    
username: string;
    skill_name: string;
    user_id: string;
    rating: number;
    
};
export type Requsetrecived= {
	map(arg0: (x: any) => any): unknown;
  requester_id:string;
  
  skill_id: string;
     requester_name: string;
      requester_skills: string; 
      message: string 
    }

//used in Sign component
export type Signin={
      username:string
      password:string
      email:string
      // skill_id:string
    }

  //used in chart components
export type PersonDetailsProps = {
receiver_id: string;
name: string;
rating: number;
skill_id: string;
skills: string;
};
// put equal
// const mappedResults: PersonDetailsProps[] results.map(result => ({
//   receiver_id: result.user_id,
//   name: result.username,
//   rating: result.rating,
//   skill_id: result.skill_ids.split(','),
//   skills: result.skill_names.split(','),
// }));
export type sendRequest = {
      user_id:string
      receiver_id:string
      skills: string;
      skill_id:string
      message: string;
  };

