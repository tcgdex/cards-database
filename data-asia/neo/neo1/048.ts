import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "xatu",
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
				ja: "預言",
			},
			effect: {
				ja: "いずれかのプレイヤーのデッキのトップ3カードを見て、好きなように再配置します。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "レイを混乱させます",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
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
