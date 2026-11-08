import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいマルマイン",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [101],
	hp: 60,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ローリングタックル",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'ja-jp': "エネルギー爆弾",
			},
			effect: {
				'ja-jp': "暗い電極に取り付けられたすべてのエネルギーカードを取り、ベンチポケモンに取り付けます（どんな方法でも）。ベンチ付きポケモンがない場合は、暗い電極に取り付けられたすべてのエネルギーカードを捨ててください。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575761
			},
		},
	],
};

export default card
