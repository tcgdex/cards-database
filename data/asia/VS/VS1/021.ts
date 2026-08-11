import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "モーティのジェンガー",
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
				ja: "催眠",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "痛みを移します",
			},
			effect: {
				ja: "MortyのGengarにダメージカウンターがある場合は、MortyのGengarから1ダメージカウンターを防御ポケモンに移動します。",
			},
		},
	],

	retreat: 1,

};

export default card
