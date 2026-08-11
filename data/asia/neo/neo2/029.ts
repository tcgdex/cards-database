import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エスペオン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [196],
	hp: 80,
	types: ["Psychic"],
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
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "サイキック",
			},
			effect: {
				'ja-jp': "防御ポケモンに取り付けられたエネルギーカードごとに30のダメージと10ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
