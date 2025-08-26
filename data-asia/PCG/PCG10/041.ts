import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Dusclops",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [356],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "暗い心",
			},
			effect: {
				ja: "対戦相手のベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "神秘的な光",
			},
			effect: {
				ja: "79が再生されている場合、防御ポケモンは混乱しています。",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
