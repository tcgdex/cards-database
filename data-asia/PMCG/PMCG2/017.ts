import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "スキスター",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [123],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "剣の踊り",
			},
			effect: {
				ja: "次のターン中、このポケモンのスラッシュ攻撃は30回以上のダメージを与えます（脱力感と抵抗を適用する前）。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 30,
		},
	],


	variants : [
		{
			type: "holo",
		},
	],
};

export default card
