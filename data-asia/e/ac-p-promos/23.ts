import { Card } from '../../../interfaces'
import Set from '../ac-p-promos'

const card: Card = {
	name: {
		en: "Tyrogue",
		ja: "バルキー",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	dexId: [236],
	hp: 30,
	types: ["Fighting"],
	stage: "Baby",

	cameoDexIds: [106, 107, 237],

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "エネパンチ",
			},
			damage: 10,
			effect: {
				ja: "コインを1回投げ、「おもて」なら、相手についている「特殊エネルギーカード」を1枚トラッシュする。「うら」なら、このワザは失敗する。",
			},
		},
	],

	retreat: 1,
}

export default card
