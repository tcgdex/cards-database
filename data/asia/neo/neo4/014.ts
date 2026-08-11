import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "Vulpix",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "ember",
			},
			effect: {
				ja: "この攻撃を使用するために、Vulpixに接続された1つの消防エネルギーカードを破棄します。",
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
