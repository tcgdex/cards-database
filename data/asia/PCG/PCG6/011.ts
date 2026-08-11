import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [169],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "レーダージャム",
			},
			effect: {
				ja: "対戦相手は、対戦相手の次のターン中に手からトレーナーカード（サポーターカードを除く）をプレイできません。",
			},
			damage: 30,
		},
		{
			cost: ["Grass", "Metal", "Colorless"],
			name: {
				ja: "ターゲット攻撃",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。そのポケモンにはすでにダメージカウンターがある場合、この攻撃は代わりに60のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],


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
