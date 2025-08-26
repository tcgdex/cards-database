import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィルのxatu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [178],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ペック",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "痛みアンプ",
			},
			effect: {
				ja: "対戦相手のポケモンのそれぞれにダメージカウンターを置いてください。",
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
