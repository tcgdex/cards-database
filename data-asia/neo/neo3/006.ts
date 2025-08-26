import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
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
				ja: "トリガーされた毒",
			},
			effect: {
				ja: "対戦相手が次のターン中にディフェンディングポケモンにエネルギーカードを取り付けた場合、そのポケモンは毒されます。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "クロス攻撃",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上の頭を手に入れると、防御するポケモンは混乱しています。",
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
