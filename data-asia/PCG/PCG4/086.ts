import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "スタントラー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [234],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スクリーチの声",
			},
			effect: {
				ja: "防御ポケモンが進化したポケモンである場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "押しのけます",
			},
			effect: {
				ja: "対戦相手の手を見て、そこにあるトレーナーカードを選択して、それを破棄します。",
			},
			damage: 20,
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
