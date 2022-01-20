let app = new Vue ({
    el: '#boolzap',
    data:
    {
        clickUtente: null,
        messaggio: '',
        rispostaDefault: 'Non posso rispondere',
        inviato : null,
        percorsoMessaggio : null,
        contacts: [
            {
                name: 'Michele',
                avatar: 'fas fa-user',
                visible: true,
                messages: 
                [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'fas fa-user',
                visible: true,
                messages: 
                [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'fas fa-user',
                visible: true,
                messages:
                [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Ecaterina',
                avatar: 'fas fa-user',
                visible: true,
                messages:
                [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],
            },
        ]    
    },
    methods:
    {
        apriContatto : function(index)
        {
            this.clickUtente = index
            console.log(index)
        },
        aggiungiMessaggio : function(index)
        {
            this.inviato = {date: '15/15/15' , text : this.messaggio , status : 'sent'}
            this.percorsoMessaggio = this.contacts[index].messages
            this.percorsoMessaggio.push(this.inviato)
            this.messaggio = ''
            this.rispostaAutomatica(index)
        },
        rispostaAutomatica : function(index)
        {
            this.inviato = {date: '15/15/15' , text : this.rispostaDefault , status : 'received'}
            this.percorsoMessaggio = this.contacts[index].messages
            setTimeout(() => {
                this.percorsoMessaggio.push(this.inviato)
            }, 3000);
        }
    }
});
