import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "シンダキル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [155],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "煙幕",
			},
			effect: {
				ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 10,
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
