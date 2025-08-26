import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ラルト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [280],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "平手打ち",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "テレポーテーションバースト",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つでラルトを切り替えます。",
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
