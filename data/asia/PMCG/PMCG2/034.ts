import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニスズメ",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [21],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ペック",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "鏡の動き",
			},
			effect: {
				'ja-jp': "Spearowが最後のターンを攻撃された場合、Spearowに対するその攻撃の最終結果を防御ポケモンに行います。",
			},

		},
	],


	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576648
			},
		},
	],
};

export default card
