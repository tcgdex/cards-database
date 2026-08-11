import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Shedinja",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [292],
	hp: 50,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "空のシェル",
			},
			effect: {
				'ja-jp': "Shedinjaがノックアウトされると、対戦相手は賞品を撮りません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "余分な呪い",
			},
			effect: {
				'ja-jp': "防御ポケモンに2つのダメージカウンターを置きます。防御ポケモンがポケモンエクスの場合、代わりに4つのダメージカウンターを入れます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
