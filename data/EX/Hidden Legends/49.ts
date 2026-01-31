import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		de: "Starmie"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d'eau",
				de: "Water Arrow"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Star",
				fr: "Étoile multicolore",
				de: "Rainbow Star"
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each type of basic Energy attached to the Defending Pokémon.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque type d'Énergie de base attaché au Pokémon Défenseur.",
				de: "Dies 50 damage plus 10 more damage for each type of basic Energy attached to the Defending Pokémon."
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276123,
		tcgplayer: 89532
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
