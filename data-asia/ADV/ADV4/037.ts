import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "luvdisc",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [370],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "愛するドロー",
			},
			effect: {
				ja: "相手が手に持っているのと同じ数のカードが手に入るまでカードを描画します。",
			},
		},
		{
			cost: ["Water"],
			name: {
				ja: "甘い誘惑",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。この攻撃は、新しい防御ポケモンに10のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
