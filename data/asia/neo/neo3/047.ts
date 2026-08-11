import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "aipom",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [190],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "掴む",
			},
			effect: {
				ja: "対戦相手のポケモンの1つに添付されたトレーナーカードを選択します。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "テールパンチ",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
