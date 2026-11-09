import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'マナフィ'
	},

	illustrator: 'Kagemaru Himeno',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [490],
	hp: 60,
	types: ['Water'],

	description: {
		ja: '生まれたときから 備わっている 不思議な 力を 使うと どんな ポケモンとも 心が 通い合う。'
	},

	stage: 'Basic',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'しんかいのめぐみ' },
			effect: {
				ja: '自分の番に1回使える。{W}エネルギーがついている自分のポケモン1匹のHPを「20」回復する。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'スプラッシュ' },
			damage: 30,
			cost: ['Water', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Grass', value: '×2' }],
	resistances: [],

	retreat: 1,

	regulationMark: 'A',
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560184,
				tcgplayer: 573940,
				cardtrader: 142427
			}
		}
	]
}

export default card
