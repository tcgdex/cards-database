import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "シェルダー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [90],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "超音速",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},

		},
		{
			cost: ["Water"],
			name: {
				ja: "シェルを隠します",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にシェルダーに与えられたすべてのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
