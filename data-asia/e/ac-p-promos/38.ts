import { Card } from '../../../interfaces'
import Set from '../ac-p-promos'

const card: Card = {
	name: {
		en: "Pikachu",
		ja: "ピカチュウ",
	},
	illustrator: "Midori Harada",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	dexId: [25],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	cameoDexIds: [150],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "スマッシュリンク",
			},
			damage: 30,
			effect: {
				ja: "コインを1回投げ、「うら」なら、自分にも20ダメージ。自分のベンチに「ミュウツー」がいるなら、このワザの自分へのダメージはなくなる。",
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],

	retreat: 1,
}

export default card
