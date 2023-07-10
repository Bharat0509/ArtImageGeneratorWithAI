const typeDefs = `#graphql

  type Img
  { _id:String
    name:String
    prompt:String
    image:String
    public_id:String
  }
  type GeneratedImg
  {
    
    prompt:String
    img:String
    
  }
  type PostData
  {
    url:String
    name:String
  }
  type Query 
  {
    images:[Img]
  }
  type Mutation
  {
    generateImage(prompt:String):GeneratedImg
    createPost(PostData:PostInput):PostData
  }
  input PostInput
  {
    name:String
    prompt:String
    image:String
  }

`;
export default typeDefs;
