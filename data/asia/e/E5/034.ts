import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピロスワイン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [221],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "凍る息",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "トランプ",
			},
			effect: {
				'ja-jp': "ベンチ付きポケモン（あなたと相手）ごとに、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st Edition"],
		},
	],
};

export default card
