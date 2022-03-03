
// should return an array of strings ['a','b'...'z']

export const getAlphabet = ()=>{
  let abc = []
  for(let i = 97; i<=122; i++){
      abc.push(String.fromCharCode(i))
  }
  return abc

}