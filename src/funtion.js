
// Take Blood Group 
let bloodGroup = prompt ("Find your blood Group (ex. A+, A-, B+, B-, O+, O-)");

let filteredMembers = DonationMembers.filter((Group) => Group.blood_group == bloodGroup );
       
console.log(`Your search blood group is: ${bloodGroup}`);

console.log(`Name List :` );

 // Get available member and blood group
if (filteredMembers.length > 0) {
   
   filteredMembers.forEach ((member, index) => {

    // Using nullish coalescing operator for Showing available member and blood group
   const allShows= (member.last_donation >=120) ? (` 
    ${index + 1}. ${member.name}, Phone no: ${member.cell} . He is available for blood Donation`) :(` 
    ${index + 1}. ${member.name}, Phone no: ${member.cell}. He is available for blood Donation after ${120 - member.last_donation} days`)

   console.log(allShows);

    // Using if condition for Showing available member and blood group

   /*  if (member.last_donation >=120) {
        console.log(` 
        ${index + 1}. ${member.name}, Phone no: ${member.cell}. He is available for blood Donation`);
       } else{
       console.log(` 
        ${index + 1}. ${member.name}, Phone no: ${member.cell}. he is available for blood Donation after ${120 - member.last_donation} days`);
       } */
    
})} else {
    console.log(`No matching blood group our blood store, Please input correct blood group.`);
  };


//search member by using their phone number with donation history
  const phone = prompt ("Type your phone no");

  console.log(`Your search phone number is: ${phone}`);

 console.table(DonationMembers.find((item) => item.cell === phone));
