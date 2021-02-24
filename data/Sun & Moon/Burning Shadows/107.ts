import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},
	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
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
				en: "Night Raid",
				fr: "Raid Nocturne",
			},
			effect: {
				en: "Your opponent reveals their hand. Discard a Pokémon from it.",
				fr: "Votre adversaire dévoile sa main. Défaussez-en un Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
