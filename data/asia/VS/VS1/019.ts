import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ホイットニーのミルタンク",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [241],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "防衛カール",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中に攻撃によってホイットニーのミルタンクに与えられたすべてのダメージを防ぎます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ロールアウトする",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
