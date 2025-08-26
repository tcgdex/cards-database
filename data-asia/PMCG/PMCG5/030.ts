import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティの触手",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [72],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "クリスタルビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中に防御ポケモンにエネルギーカードを取り付けることができません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
