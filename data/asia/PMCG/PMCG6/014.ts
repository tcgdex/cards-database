import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キョウのゴルバット",
	},
	illustrator: "Ken Sugimori",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [42],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "噛む",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				'ja-jp': "ソニックスクリーム",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575376
			},
		},
	],
};

export default card
