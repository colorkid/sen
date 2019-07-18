export default function() {
	return [
        {
        	id: 'subject',
            type: 'text',
            placeholder: 'Тема письма',
            value: ''
        },
		{
            id: 'fromName',
            type: 'text',
            placeholder: 'Имя отправителя',
            value: ''
        },
        {
            id: 'fromEmail',
            type: 'email',
            placeholder: 'Email отправителя',
            value: ''
        },
        {
            id: 'toName',
            type: 'text',
            placeholder: 'Имя получателя',
            value: ''
        },
        {
            id: 'toEmail',
            type: 'email',
            placeholder: 'Email получателя',
            value: ''
        },
        {
            id: 'message',
            type: 'textArea',
            placeholder: 'Сообщение',
            value: ''
        }
	]
}