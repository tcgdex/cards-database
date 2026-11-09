import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ミカルゲ'
	},

	illustrator: 'Kouki Saitou',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [442],
	hp: 60,
	types: ['Darkness'],

	description: {
		ja: '１０８個の 魂が 集まって 生まれた ポケモン。 要石の ひび割れに つながれている。'
	},

	stage: 'Basic',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'じゅばくのうず' },
			effect: {
				ja: 'このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'のろいのしずく' },
			effect: {
				ja: 'ダメカン3個を、相手のポケモンに好きなようにのせる。'
			},
			cost: ['Darkness', 'Colorless']
		}
	],

	weaknesses: [],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560206,
				tcgplayer: 573962,
				cardtrader: 142449
			}
		}
	]
}

export default card
