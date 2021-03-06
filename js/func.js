let app = new Vue ({
    el: '#boolzap',
    data:
    {
        clickUtente: null,
        nomeValore: '',
        messaggio: '',
        rispostaDefault: 'Non posso rispondere',
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
            console.log('Ritorna ' + this.clickUtente)
        },
        aggiungiMessaggio : function(index)
        {
            this.inviato = {date: '15/15/15' , text : this.messaggio , status : 'sent'}
            this.percorsoMessaggio = this.contacts[index].messages
            this.percorsoMessaggio.push(this.inviato)
            this.messaggio = ''
            setTimeout(() => {
                this.rispostaAutomatica(index)
            }, 3000);
        },
        rispostaAutomatica : function(index)
        {
            const inviato = {date: '15/15/15' , text : this.rispostaDefault , status : 'received'}
            this.contacts[index].messages.push(inviato)
        },
        ricercaContatti: function()
        {
            for (let index = 0; index < this.contacts.length; index++)
            {
                const element = this.contacts[index];
                const testo = element.name.toLowerCase();
                if(!testo.toLowerCase().includes(this.nomeValore.toLowerCase()))
                {
                    element.visible = false; 
                }
                else
                {
                    element.visible = true; 
                }

            }
        }    
    }
});
