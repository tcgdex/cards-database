import { Card } from '../../../interfaces'
import Set from '../ac-p-promos'

const card: Card = {
	name: {
		en: "Pikachu",
		ja: "ピカチュウ",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	dexId: [25],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	cameoDexIds: [246],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "かくれる",
			},
			effect: {
				ja: "コインを1回投げ「おもて」なら、次の相手の番、自分はワザによるダメージや効果を受けない。",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "でんげき",
			},
			damage: 30,
			effect: {
				ja: "コインを1回投げ「うら」なら、自分にも10ダメージ。",
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
