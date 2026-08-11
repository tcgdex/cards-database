import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クロバット",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [169],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "トリガーされた毒",
			},
			effect: {
				'ja-jp': "対戦相手が次のターン中にディフェンディングポケモンにエネルギーカードを取り付けた場合、そのポケモンは毒されます。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "クロス攻撃",
			},
			effect: {
				'ja-jp': "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上の頭を手に入れると、防御するポケモンは混乱しています。",
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
