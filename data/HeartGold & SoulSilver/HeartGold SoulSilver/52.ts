import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Big Yawn",
				fr: "Gros bâillement",
			},
			effect: {
				en: "Both Slowbro and the Defending Pokémon are now Asleep.",
				fr: "Flagadoss et le Pokémon Défenseur sont maintenant Endormis.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Madkinesis",
				fr: "Mentalisme",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Psychic Energy attached to Slowbro.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Psychic attachée à Flagadoss.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
