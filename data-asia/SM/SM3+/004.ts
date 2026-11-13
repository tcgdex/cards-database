import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるセレビィ'
	},

	illustrator: 'Sanosuke Sakuma',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [251],
	hp: 70,
	types: ['Grass'],

	description: {
		ja: '時間を超えて あちこち さまよう。 セレビィが 姿を 現した 森は 草木が 生い茂るという。'
	},

	stage: 'Basic',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'タイムリコール' },
			effect: {
				ja: 'このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'リーフステップ' },
			damage: 30,
			cost: ['Grass', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560162,
				tcgplayer: 573918,
				cardtrader: 142405
			}
		}
	]
}

export default card
