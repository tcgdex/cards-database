import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "アルカニン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [59],
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "火炎放射器",
			},
			effect: {
				ja: "アルカニンに取り付けられた1つの消防エネルギーカードを廃棄すると、この攻撃は何もしません。",
			},
			damage: 50,
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				ja: "降ろす",
			},
			effect: {
				ja: "アルカニンはそれ自体に30のダメージを与えます。",
			},
			damage: 80,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
