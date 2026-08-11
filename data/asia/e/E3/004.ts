import { Card } from "models/database/card"
import Set from "../E3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "vileplume",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "毒の香り",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンは毒され、混乱しています。尾の場合、防御するポケモンは毒され、眠っています。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "中毒性の花粉",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、対戦相手は次のターン中にサポーターカードをプレイできません。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		}, {
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
