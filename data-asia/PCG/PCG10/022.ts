import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Walrein Ex",
	},


	category: "Pokemon",
	dexId: [365],
	hp: 150,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "息を吸う",
			},
			effect: {
				ja: "ターン中に、Pokã©Monの1を進化させるためにWalrein Exを手からプレイすると、このパワーを使用できます。対戦相手は、対戦相手の次のターン中にトレーナーカードを手からプレイできません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "難破船",
			},
			effect: {
				ja: "スタジアムカードがプレイされている場合、この攻撃は70のダメージと20のダメージを与えます。そのスタジアムカードを捨ててください。",
			},
		},
	],

	retreat: 3,

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
