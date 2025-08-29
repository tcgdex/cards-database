import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "クレアのジンクス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [124],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ポンド",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "奇妙なキス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与え、防御ポケモンが混乱しています。",
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
