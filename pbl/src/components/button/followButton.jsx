import React, { useState, useEffect } from "react";
import axios from "axios";

function FollowButton({ clubId }) {
   const [isFollowing, setIsFollowing] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     const checkFollowStatus = async () => {
       try {
         const userId = localStorage.getItem("id");  
         if (!userId) {
           setIsLoading(false);
           return;
         }

         const response = await axios.get(`http://localhost:5000/api/follow/${userId}/followedClubs`);
         const followedClubs = response.data.followedClubs || [];

         // ✅ Corrected check: Compare `clubId` with `id` field of followedClubs
         setIsFollowing(followedClubs.some(club => club.id === clubId));
       } catch (error) {
         console.error("Error checking follow status:", error);
       } finally {
         setIsLoading(false);
       }
     };

     checkFollowStatus();
   }, [clubId]);

   const handleFollowClick = async () => {
     try {
       const userId = localStorage.getItem("id");
       if (!userId) {
         alert("Please log in to follow/unfollow clubs.");
         return;
       }

       const action = isFollowing ? "unfollow" : "follow";
       const url = `http://localhost:5000/api/follow/${action}`;

       // Optimistically update UI
       setIsFollowing(!isFollowing);

       const response = await axios.post(url, { clubId, userId });

       if (response.status !== 200) {
         throw new Error("Failed to update follow status");
       }
     } catch (error) {
       console.error(`Error ${isFollowing ? "unfollowing" : "following"} the club:`, error);
       alert("There was an error with following/unfollowing the club.");
       setIsFollowing(!isFollowing);  // Revert state if error occurs
     }
   };

   if (isLoading) {
     return <div>Loading...</div>;
   }

   return (
     <button
       onClick={handleFollowClick}
       className={`pl-3 pr-3 pt-1 pb-1 text-lg rounded-lg m-2 ${isFollowing ? "bg-red-500" : "bg-purple-500"} text-white`}
     >
       {isFollowing ? "Unfollow" : "Follow"}
     </button>
   );
}

export default FollowButton;
