import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モーティのジェンガー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [94],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "催眠",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "痛みを移します",
			},
			effect: {
				'ja-jp': "MortyのGengarにダメージカウンターがある場合は、MortyのGengarから1ダメージカウンターを防御ポケモンに移動します。",
			},
		},
	],

	retreat: 1,

};

export default card
