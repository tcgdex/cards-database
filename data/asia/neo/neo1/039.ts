import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Electabuzz",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [125],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "パンチ",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				'ja-jp': "迅速",
			},
			effect: {
				'ja-jp': "この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
