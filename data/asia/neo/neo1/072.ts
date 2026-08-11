import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルギア",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [249],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Water", "Lightning"],
			name: {
				'ja-jp': "エレメンタルブラスト",
			},
			effect: {
				'ja-jp': "この攻撃を使用するために、Lugiaに取り付けられた消防エネルギーカード、水エネルギーカード、Lightning Energyカードを捨てます。",
			},
			damage: 90,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
