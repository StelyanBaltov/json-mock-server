const config = {
    admin: {
        totals: {
            cards: [
                { type: 'input', title: 'Card 1', children: [
                    { type: 'text', placeholder: 'First Name', inputKey: 'firstName', label: 'First Name', value: '', onChange: () => {} },
                    { type: 'text', placeholder: 'Last Name', inputKey: 'lastName', label: 'Last Name', value: '', onChange: () => {} }
                ]},
                { type: 'string', title: 'Card 2', children: [
                    'This content is only visible for ADMIN type permission',
                    'This content is only visible for ADMIN type permission',
                    'This content is only visible for ADMIN type permission',
                    'This content is only visible for ADMIN type permission',
                    'This content is only visible for ADMIN type permission',
                    'This content is only visible for ADMIN type permission'
                ]}
            ]
        },
        bonusTotals: {
            cards: [
                { type: 'button', title: 'Game List Card 1', children: [
                    { label: 'button 1' },
                    { label: 'button 2' }
                ]},
                { type: 'button', title: 'Game List Card 2', children: [
                    { label: 'button 1' },
                    { label: 'button 2' }
                ]},
                { type: 'card', title: 'Game List Card 3', children: [
                    { title: 'Card in Card 1', children: 'this is a sample child' },
                    { title: 'Card in Card 2', children: 'game list' }
                ]},
            ]
        },
        activity: {
            cards: [
                { title: 'Activity Card', children: [
                    { data: 'users', columns: [
                        { name: 'id', header: 'ID'},
                        { name: 'firstName', header: 'First Name'},
                        { name: 'lastName', header: 'Last Name'}
                    ]}
                ]}
            ]
        },
        gameList: {
            cards: [
                { type: 'button', title: 'Game List Card 1', children: [
                    { label: 'button 1' },
                    { label: 'button 2' }
                ]},
                { type: 'card', title: 'Game List Card 2', children: [
                    { title: 'Card in Card 1', children: 'this is a sample child' },
                    { title: 'Card in Card 2', children: 'game list' }
                ]},
                { type: 'card', title: 'Game List Card 3', children: [
                    { title: 'Card in Card 1', children: 'this is a sample child' },
                    { title: 'Card in Card 2', children: 'game list' }
                ]},
            ]
        },
        report: {
            cards: [
                { type: 'input', title: 'Card 1', children: [
                    { type: 'text', placeholder: 'Country', inputKey: 'country', label: 'Country', value: '', onChange: () => {} }
                ]},
                { type: 'string', title: 'Card 2', children: [
                    'This content is only visible for ADMIN type permission'
                ]},
                { type: 'input', title: 'Card 3', children: [
                    { type: 'text', placeholder: 'User Input', inputKey: 'userInput', label: 'User Input', value: '', onChange: () => {} }
                ]},
                { type: 'input', title: 'Card 4', children: [
                    { type: 'text', placeholder: 'User Input', inputKey: 'userInput', label: 'User Input', value: '', onChange: () => {} }
                ]},
                { type: 'input', title: 'Card 5', children: [
                    { type: 'text', placeholder: 'User Input', inputKey: 'userInput', label: 'User Input', value: '', onChange: () => {} }
                ]},
                { type: 'input', title: 'Card 6', children: [
                    { type: 'text', placeholder: 'User Input', inputKey: 'userInput', label: 'User Input', value: '', onChange: () => {} }
                ]},
                { type: 'input', title: 'Card 7', children: [
                    { type: 'text', placeholder: 'User Input', inputKey: 'userInput', label: 'User Input', value: '', onChange: () => {} }
                ]}
            ]
        }
    },
    user: {
        totals: {
            cards: [
                { type: 'input', title: 'Card 1', children: [
                    { type: 'text', placeholder: 'Country', inputKey: 'country', label: 'Country', value: '', onChange: () => {} }
                ]},
                { type: 'string', title: 'Card 2', children: [
                    'This content is only visible for USER type permission',
                    'This content is only visible for USER type permission',
                    'This content is only visible for USER type permission',
                    'This content is only visible for USER type permission',
                    'This content is only visible for USER type permission'
                ]},
                { type: 'input', title: 'Card 3', children: [
                    { type: 'text', placeholder: 'User Input', inputKey: 'userInput', label: 'User Input', value: '', onChange: () => {} }
                ]},
            ]
        },
        search: {
            cards: [
                { title: 'Search Card', children: [
                    { data: 'users', columns: [
                        { name: 'id', header: 'ID'},
                        { name: 'firstName', header: 'First Name'},
                        { name: 'lastName', header: 'Last Name'},
                        { name: 'phone', header: 'Phone' }
                    ]}
                ]}
            ]
        },
        gameList: {
            cards: [
                { type: 'button', title: 'Game List Card 1', children: [
                    { label: 'button 1' },
                    { label: 'button 2' }
                ]},
                { type: 'card', title: 'Game List Card 2', children: [
                    { title: 'Card in Card 1', children: 'this is a sample child' },
                    { title: 'Card in Card 2', children: 'game list' }
                ]},
            ]
        }
    }
}

module.exports = config;