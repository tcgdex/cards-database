import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "スムーチュム",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [238],
	hp: 30,
	types: ["Psychic"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "PSYKISS",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンの1つに取り付けられた特別なエネルギーカードを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
