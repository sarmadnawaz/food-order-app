export const getAmount = (id, items) => {
    if(items.length){
      const item = items.find(item => item.id === id)
      if(item)
        return item.amount
      }
    return 0  
}

