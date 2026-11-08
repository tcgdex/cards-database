import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スワロット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [317],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "選択して選択します",
			},
			effect: {
				'ja-jp': "燃やされたり毒されたり、眠ったり混乱したりするかのいずれかを選択します。防御ポケモンは現在、両方の特別な条件の影響を受けています。",
			},
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "反応毒",
			},
			effect: {
				'ja-jp': "50のダメージと、防御ポケモンに影響を与える特別な状態ごとに20のダメージをさらに20回かけます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
