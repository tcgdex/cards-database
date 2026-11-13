import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ゾロア'
	},

	illustrator: 'kodama',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [570],
	hp: 60,
	types: ['Darkness'],

	description: {
		ja: '相手そっくりに 化けているように みせかけ だましたり 驚かして そのすきに 逃げ出すことが 多い。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ふむ' },
			damage: 10,
			cost: ['Darkness']
		},
		{
			name: { ja: 'ぶつかる' },
			damage: 20,
			cost: ['Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Psychic', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560211,
				tcgplayer: 573967,
				cardtrader: 142454
			}
		}
	]
}

export default card
