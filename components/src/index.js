import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const APP = ()=>{
	return (
			<div className="ui container comments">
				<ApprovalCard>
					<div>
						<h4>Warning</h4>
						Are you sure you want to do this?
					</div>
				</ApprovalCard>
				<ApprovalCard>		
					<CommentDetail 
						author="Sam" 
						timeAgo="Today at 4:00pm" 
						content="Any one there!" 
						avatar={faker.image.avatar()}/>
				</ApprovalCard>	
				<ApprovalCard>	
					<CommentDetail 
						author="Vij" 
						timeAgo="Today at 3:30pm" 
						content="What's the subject" 
						avatar={faker.image.avatar()}/>
				</ApprovalCard>			
				<ApprovalCard>	
					<CommentDetail 
						author="Kim" 
						timeAgo="Yesterday at 2:45pm" 
						content="Hi there" 
						avatar={faker.image.avatar()}/>	
				</ApprovalCard>	
			</div>
		)
};

ReactDom.render(
	<APP/>,
	document.querySelector('#root')
);