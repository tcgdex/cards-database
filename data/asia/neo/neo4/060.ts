import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ZなしZ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "ズーム[ズーム]",
			},
			effect: {
				'ja-jp': "[Z]がベンチにある限り、あなたはその名のないポケモンを退却するためにエネルギーコストを支払いません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "隠された力",
			},
			damage: 10,
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
