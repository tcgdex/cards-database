import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベルダム",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [374],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ひっくり返します",
			},
			effect: {
				'ja-jp': "Beldumはそれ自体に10ダメージを与え、この損傷に衰弱と抵抗を適用しないでください。",
			},
			damage: 30,
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
