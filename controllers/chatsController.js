var chats = require('../data/chats.json')

module.exports = {
    list: function (req, res) {
        if (req.query.order == 'recent') {
          res.send(chats.reverse())
        }

        res.send(chats)
    },

    read: function (req, res) {
        let chat = chats.find(function (chat) {
          return chat.id == req.params.id
        })
      
        if (chat) {
          res.send(chat)
        }
      
        res.status(404).send({error: 'Not found'})
    },

    create: function (req, res) {
        chats.push(req.body)
        res.status(201)
    },

    update: function (req, res) {
        let index = chats.findIndex(function (chat) {
          return chat.id == req.params.id
        })
      
        chats[index].message = 'editado'
      
        res.status(200)
    },

    delete: function (req, res) {
        let index = chats.findIndex(function (chat) {
          return chat.id == req.params.id
        })
      
        delete chats[index]
      
        res.status(200).send('Ok')
    }
}
