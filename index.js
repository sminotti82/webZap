let app = new Vue({
    el:"#root",
    data:{
         contatore:0,  
         last:'ultimo accesso:',   
         user:{
            'nome':'Sebastiano',
            'cognome':'Minotti',
            'accesso':'online',
             'avatar':'img/avatar_io.jpg',
         },
         contacts: [
            {
              name: "michele",
              lastAccess:'21:00',
              avatar: "_1",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  text: "Hai portato a spasso il cane?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Ricordati di dargli da mangiare",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "10/01/2020 16:15:22",
                  text: "Tutto fatto!",
                  status: "received",
                  menuVisible: false,
                },
              ],
            },
            {
              name: "fabio",
              lastAccess:'20:00',
              avatar: "_8",
              visible: true,
              messages: [
                {
                  date: "20/03/2020 16:30:00",
                  text: "Ciao come stai?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "20/03/2020 16:30:55",
                  text: "Bene grazie! Stasera ci vediamo?",
                  status: "received",
                  menuVisible: false,
                },
                {
                  date: "20/03/2020 16:35:00",
                  text: "Mi piacerebbe ma devo andare a fare la spesa.",
                  status: "sent",
                  menuVisible: false,
                },
              ],
            },
            {
              name: "samuele",
              lastAccess:'16:00',
              avatar: "_3",
              visible: true,
              messages: [
                {
                  date: "28/03/2020 10:10:40",
                  text: "La Marianna va in campagna",
                  status: "received",
                  menuVisible: false,
                },
                {
                  date: "28/03/2020 10:20:10",
                  text: "Sicuro di non aver sbagliato chat?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "28/03/2020 16:15:22",
                  text: "Ah scusa!",
                  status: "received",
                  menuVisible: false,
                },
              ],
            },
            {
              name: "luisa",
              lastAccess:'17:30',
              avatar: "_9",
              visible: true,
              messages: [
                {
                  date: "10/01/2020 15:30:55",
                  text: "Lo sai che ha aperto una nuova pizzeria?",
                  status: "sent",
                  menuVisible: false,
                },
                {
                  date: "10/01/2020 15:50:00",
                  text: "Si, ma preferirei andare al cinema",
                  status: "received",
                  menuVisible: false,
                },
              ],
            },
          ],
    },
    methods:{
        sceltaUtn:function(index){
            this.contatore=index
        }
    }
})