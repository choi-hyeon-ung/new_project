const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
    {
        id: 1
        title: "todo1"
        completed: true
    }, {
        id: 2,
            title: "todo2"
        completed: false
    }

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.post('/create',(req,res)=> {
    res.send
}


app.post('/create' , (req, res) => {
    console.log(req)
} // 서버의 자원을 생성 (저장)

//app.delete() : 서버의 자원을 삭제

//app.put(): 서버의 자원을 전체 수정

//app.patch():서버의 자원을 일부 수정




