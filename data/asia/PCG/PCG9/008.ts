import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "アーボック（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [24],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "燃えている毒",
			},
			effect: {
				ja: "防御ポケモンは現在燃やされ、毒されています。",
			},
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "絞め殺し",
			},
			effect: {
				ja: "ディフェンディングポケモンがカードにDがある場合、この攻撃は50のダメージと30ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
