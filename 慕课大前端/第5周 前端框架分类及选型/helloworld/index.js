const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')

const app = new Koa()
const router = new Router()
router.prefix('/api')

router.get('/', ctx => {
    ctx.body = "hello world"
})

router.get('/api', ctx => {
    const params = ctx.request.query
    console.log(params);
    console.log(params.name, params.age);
    ctx.body = "hello"
})

router.post('/post', async (ctx) => {
    let {
        body
    } = ctx.request
    console.log(body);
    console.log(ctx.request);
    ctx.body = {
        ...body
    }
})

app.use(koaBody())
app.use(cors())
app.use(json({
    pretty: false,
    params: 'pretty'
}))

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)