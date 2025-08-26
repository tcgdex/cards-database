import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "スムーチュム",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [238],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "赤ちゃんの進化",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、Jynxを手からsmoochum（これは進化するSmoochumとしてカウント）に置き、Smoochumからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "吹き飛ばされたキス",
			},
			effect: {
				ja: "相手のポケモンの1つに1つのダメージカウンターを置きます。",
			},
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
