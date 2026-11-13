import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'フーパ'
	},

	illustrator: 'TOKIYA',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [720],
	hp: 120,
	types: ['Darkness'],

	description: {
		ja: '真の姿は 巨大な 力を 持っている。 財宝 欲しさに それが 隠された 城ごと 引き抜き 奪い去った という 伝説が ある。'
	},

	stage: 'Basic',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'バンデットガード' },
			effect: {
				ja: 'このポケモンは、相手の「ポケモンGX・EX」からワザのダメージや効果を受けない。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'ちょうねんりき' },
			damage: 80,
			cost: ['Darkness', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Psychic', value: '-20' }],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560214,
				tcgplayer: 573970,
				cardtrader: 142457
			}
		}
	]
}

export default card
