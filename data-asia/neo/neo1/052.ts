import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "グリガー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [207],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "毒物",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
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
