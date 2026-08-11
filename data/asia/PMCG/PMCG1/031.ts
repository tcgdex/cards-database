import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コイキング",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "フレイル",
			},
			effect: {
				'ja-jp': "10ダメージの時間は、Magikarpのダメージ数をカウンターします。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575647
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577074
			}
		}
	],
};

export default card
