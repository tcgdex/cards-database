import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィルのエスペオン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [196],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "テールスラップ",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "PSYBEAM",
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
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
