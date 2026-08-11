import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギャラドス",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "ドラゴンレイジ",
			},
			damage: 50,
		},
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: {
				'ja-jp': "バブルビーム",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575606
			},
		},
		{
			type: "holo",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577033
			}
		}
	],
};

export default card
