<template>
  <div id="app">
    <div>
      <template v-for="item in radioGroup">
        <el-radio 
          v-model="radio" 
          :label="item" 
          :key="item" >
          {{item}}
        </el-radio> 
      </template>
    </div>
    {{radio}}

    <el-table
    :data="tableData[radio]"
    stripe
    style="width: 100%">
      <el-table-column
          prop="date"
          label="时间"
          width="180">
        </el-table-column>
    <template v-for="(item,index) in tableHead">
       <el-table-column
          :key="index"
          :prop="item.point_id"
          :label="item.point_name"
          width="180">
        </el-table-column>
    </template>
   
    
  </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      radio:'aqi',
      radioGroup:["aqi","pm25","pm10","so2","co","no2","o3"],
      tags:'Hello Vue',
      tableHead:[],
      tableData:[]
    }
  },
  methods:{
    getData(){
      this.$http.get('http://114.115.131.13:8082/rest/air/analysis/getHistoryDataAnalysis?map[regionCode]=370321&map[startTime]=2019-12-27+09:15&map[endTime]=2019-12-27+10:15&map[pointclassificat]=0,1,2,3,8,14&map[dataType]=min&map[pointIds]=b2d6fd35ca13498699b87642725a638c,fcf0f28a2fda4c94b09586082a002ac1,a843a593257e46a591be58d0726e39aa,3ae95aac1dae4259b396665f1550c36c,294a73160da140e09d531800205dab13,0c6d1b34f84c49fc8f02e7df472a0c04,d44257a9bff9419089f353dfa6c7a81d,aa6db113eaf04876b7242312f5cca7f5,667a99d7bc8d4e548ddd433003204600,886a039ba2ae4426abdf5b0c33cc92ba,cd49060e7cc6466ebb2c1b4ce782776b,5df40d7589d64b5f92009c26041b3204,15adcb1076e04df2ac453eb4703eb6cc,cf37afcc62c64a42a5116cc335e465f0,99dc233db31346b3838b873501709890,7715d581517f44ba86115dd98c897f6a,0ae66c4db9cf4ce797671b29fc96df56,cae79486ade848d096bf1fa1b9c28373,b3c61e626a0d4212be3a1789e2889d25,2c58cd0557764a87b3a1ca835adc0067,effd4dc28006419ea570926a02b4fbb4,bf490617982a4e9ebe81fbcc01e9de3a,444e6f3b9b454f6995f6a8f6b97f3531,b70414e161cf4702be8ab57a1c0dbee9,d870ddd6-89db-48c3-a54b-b8300a8603f3,b449e0fb16e14c45a553021c86c62520,9f03b96287404c35ac761da4a9e335eb,449f871f583549eb95d8a97b85ba5499,1a658b6d-8f95-4859-a376-d29456095080,ed7cc00c-9843-4330-ae58-56fde9b8e23b,2b6d0770d1bb4580a9dbec2325f49485,096297e6-1e55-4741-a841-081d12c9d3de,bd0463c0-4cfc-4fb1-86d1-76cf34929d23,6e7da8fc-7eac-45ba-bede-130c6ae0d8f9,a80f2883-0b45-41b3-a7df-34baf9e9630a,2c4b9d93-a486-4b19-8065-f8ff06f69d9f,de0fe74eec6d4aa0b3b7730e4d843de7,d1373cce-ce7b-416c-a6a4-11633b8c8e03,a39c8ecf-9a43-445e-a954-56f71c7ac95a,5fcca2bc-9d3b-4af1-82ad-723f77889d84,c8bea610-b628-43a0-b247-21f73cd3aa54,5f29083971af4997b86471b7124e9b3e,292d8466-c369-4d31-9d7f-6c07e0f41c08,8959bf20-6d5f-41bf-8db2-f8ae9e1874f0,afbb423f-0f3b-4615-b0f6-ca638d3b9be0,b22090d1-978c-4c1f-83ff-588b87be9e9c,fe0f8347-e88e-4726-8a9b-f22aecc53c5f,fb9845c1-1b7b-4153-b26d-26878880499f,42e2c603-b8d8-4ff3-91ef-3f7d67cafeb1,d341eb3831bc4ee98f2d0d8244b1d880,fe47fadbc3d94974b5bea64e2e1152fb,62be0e15-106a-41a8-b837-341f30875772,8ffd789279ad41a0b43f06b1bc1e8faf,23871966-7e4b-41ac-8e88-d718fcec5ec6,6368c68a-288d-425d-be07-8613b3d483f1,a61eb3e0-90ad-44d9-a6d1-a562dd68de83,5d058fb2-08f1-42fd-9b6a-875a7a86559d,1c448d08-0cf1-434a-879d-5112672010b5,d70ca677-0e2e-40e5-8c48-649df929ffa2,72b5244311ce4f80aeaa050affe3dcaa,6c2556bf911c4e84af7da6c843a25912,a2d627524a7f4bc6a3466cb1fa75f640,e1ac38074cb14e35b64ddd048c26da61,4575830af928460b870dc296c0def71e,69472222c9954cbe92a63e37d2110a50,77430474968a45039686e71b3584c9d8,b03dff88797a448e91cb3510d7d1aca2,7e402da5-d686-46f3-bdc9-dc6a1e3da08e,778f0503-b76e-4ab6-a066-ad7674b4ca6b,9b4c45b2-2bb6-414b-9174-6aef8d91750a,6190967ced1c4bbfbcefa6d652589977,2e54fa72-cbde-4ef7-b296-1ad7ab79e106,17b6a121-517e-47f5-8ef4-200e2aa9eada,5f6084c4-b0f4-4bf4-8224-1a3d6cac996f,36b1d130f85e442bb04fc801e300eafe,2f22682df24d4fcf8e03e9b36487c539,0f555055489f4441a45189a61cd198e6,212fa7bc-8b22-49ab-9e4c-c1decba066bd,3d4c3103-cd38-4a42-8960-ca033441be63,9ffb83da595c48718abe51cc5110bca0,a1b9be87-f570-4264-84b4-968bd74fd85e,41a9bf3b-2ad2-4624-8640-eeadf92e33da,096297e6-1e55-4741-a841-081d12c9d3de').then(res=>{
        // console.log(res)
        let { result } = res.data
        this.tableHead = this.dealHeadData(result)
        this.tableData = this.dealTableData(result)
      }).catch(err=>{
        console.log(err)
      })
    },
    dealHeadData(data){
      // console.log(data)
      let keys = Object.keys(data)
      let single = data[keys[0]]
      let arr = []
      single.map(item=>{
        if(item.point_name!==null){
          arr.push({
            point_name:item.point_name,
            point_id:item.point_id
          })
        }
      })
      return arr

    },
    dealTableData(data){
      console.log('dealTableData')

      let arr = []
      let keys = Object.keys(data)
      console.log(keys)
      keys.forEach(key=>{
        let label = {
          date:key
        }
        this.tableHead.forEach(hd=>{
          label[hd.point_id] = ''
        }) 

        arr.push(label)
      })

      console.log(arr)

      let tableData = {}
      this.radioGroup.forEach(item=>{
        let newArr = JSON.parse(JSON.stringify(arr))
        newArr.forEach(arrItem=>{
          data[arrItem.date].forEach(dataItem=>{
            this.tableHead.forEach(hd=>{
              if(dataItem.point_id===hd.point_id){
                arrItem[dataItem.point_id] = dataItem[item]||'--'
              }
            })
          })
        })
        tableData[item] = newArr
      })

      return tableData
    }
  },
  mounted(){
    this.getData()
  },
  watch:{
    radio(val){
      console.log(val)
    }
  }
}
</script>

<style>

</style>