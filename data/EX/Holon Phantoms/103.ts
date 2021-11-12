import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mewtwo Star",
		fr: "Mewtwo ☆"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Absorption",
				fr: "Absorption d'énergie"
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Mewtwo Star.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie et attachez-la à Mewtwo ."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Psychic",
			],
			name: {
				en: "Psychic Star",
				fr: "Étoile psy"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, discard all Energy attached to Mewtwo Star and this attack does 50 damage plus 50 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, défaussez les Énergies attachées à Mewtwo  et cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
