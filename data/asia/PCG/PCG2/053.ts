import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バルトイ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [343],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スピニング攻撃",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "セルフデストラクト",
			},
			effect: {
				'ja-jp': "各ベンチポケモン（あなたと対戦相手の両方）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）バルトイはそれ自体に50のダメージを与えます。",
			},
			damage: 40,
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
