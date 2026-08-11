import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Xatu（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [178],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "余分な羽",
			},
			effect: {
				'ja-jp': "ステージ2Pokã©Mon-Exのそれぞれは、防御するPokã©Monに10個のダメージを与えます（脱力感と抵抗を適用する前）。",
			},
		}],

	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
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
