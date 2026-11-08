import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Cresselia-EX",
		'fr-fr': "Cresselia-EX",
		'es-es': "Cresselia-EX",
		'it-it': "Cresselia-EX",
		'pt-br': "Cresselia-EX",
		'de-de': "Cresselia-EX"
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
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
				'en-us': "Sparkling Particles",
				'fr-fr': "Particules Étincelantes",
				'es-es': "Partículas Centelleantes",
				'it-it': "Atomidiluce",
				'pt-br': "Partículas Cintilantes",
				'de-de': "Glitzerteilchen"
			},
			effect: {
				'en-us': "At any time between turns, heal 10 damage from this Pokémon.",
				'fr-fr': "N’importe quand entre chaque tour, soignez 10 dégâts à ce Pokémon.",
				'es-es': "En cualquier momento entre turnos, cura 10 puntos de daño a este Pokémon.",
				'it-it': "Tra un turno e l’altro, in qualsiasi momento, cura questo Pokémon da 10 danni.",
				'pt-br': "A qualquer momento entre as vezes de jogar, cure 10 de danos deste Pokémon.",
				'de-de': "Heile zu einem beliebigen Zeitpunkt zwischen den Zügen 10 Schadenspunkte bei diesem Pokémon."
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
				'en-us': "Psychic Protection",
				'fr-fr': "Protection Psy",
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
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
