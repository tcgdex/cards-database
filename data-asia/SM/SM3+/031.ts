import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ビリリダマ'
	},

	illustrator: 'match',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [100],
	hp: 60,
	types: ['Lightning'],

	description: {
		ja: 'モンスターボールが 売り出されたのと 同じ 時期に 発見された。 なにか 関係があると いわれる。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'エレキボール' },
			damage: 10,
			cost: ['Lightning']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560189,
				tcgplayer: 573945,
				cardtrader: 142432
			}
		}
	]
}

export default card
