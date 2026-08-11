import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "xatu",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [178],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "預言",
			},
			effect: {
				'ja-jp': "いずれかのプレイヤーのデッキのトップ3カードを見て、好きなように再配置します。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 30,
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
