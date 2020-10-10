import frontDataSource from './assets/wang_fund_memberlist.json'
function getFrontData (list) {
  const jsonObject = frontDataSource
  const frontData = {}
  jsonObject.front.forEach((obj) => {
    frontData[obj.date] = obj
    console.log(obj.id, obj.name, obj.industry)
    list.push({
      id: obj.id,
      nation: obj.nation,
      name: obj.name,
      industry: obj.industry,
      headquarters: obj.headquarters,
      empnumber: obj.empnumber,
      keyperson: obj.keyperson,
      text: obj.text

    })
  })
  return list
}
export {getFrontData}
