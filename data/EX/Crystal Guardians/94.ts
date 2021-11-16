import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Jirachi ex",
		fr: "Jirachi ex"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 90,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Star Light",
				fr: "Lumière d'étoile"
			},
			effect: {
				en: "As long as your opponent has any Pokémon-ex or Stage 2 Evolved Pokémon in play, Jirachi ex pays Colorless less Energy to use Shield Beam or Super Psy Bolt.",
				fr: "Tant que votre adversaire possède des Pokémon-ex ou des Pokémon Évolués de Niveau 2 en jeu, Jirachi ex paye une Énergie  de moins pour utiliser Rayon protecteur ou Super psy."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Shield Beam",
				fr: "Rayon protecteur"
			},
			effect: {
				en: "During your opponent's next turn, your opponent can't use any Poké-Powers on his or her Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, celui-ci ne pourra pas utiliser de Poké-Powers sur son Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy"
			},

			damage: 50,

		},
	],






}

export default card
