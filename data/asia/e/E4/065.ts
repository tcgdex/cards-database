import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Eevee",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スマッシュキック",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "降ろす",
			},
			effect: {
				'ja-jp': "Eeveeはそれ自体に10ダメージを与えます。",
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
