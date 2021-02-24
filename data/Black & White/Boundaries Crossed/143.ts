import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Cresselia-EX",
		fr: "Cresselia-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sparkling Particles",
				fr: "Particules Étincelantes",
			},
			effect: {
				en: "At any time between turns, heal 10 damage from this Pokémon.",
				fr: "N'importe quand entre chaque tour, soignez 10 dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Protection",
				fr: "Protection Psy",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
