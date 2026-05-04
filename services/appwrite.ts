// track the searches made by the user
import '@/interfaces/interfaces.d';
import { client } from "@/lib/appwrite";
import { Databases, Query } from "react-native-appwrite";

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
      const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[
         Query.equal('searchTerm', query)
      ])

      console.log(result)
    // check if a record of that search has already been stored
    //if a document is found increment the searcCount field
    // if no document is found
       // create a new document in Appwrite database => 1


}