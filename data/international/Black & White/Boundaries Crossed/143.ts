import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Cresselia-EX",
		fr: "Cresselia-EX",
		es: "Cresselia-EX",
		it: "Cresselia-EX",
		pt: "Cresselia-EX",
		de: "Cresselia-EX"
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
				es: "Partículas Centelleantes",
				it: "Atomidiluce",
				pt: "Partículas Cintilantes",
				de: "Glitzerteilchen"
			},
			effect: {
				en: "At any time between turns, heal 10 damage from this Pokémon.",
				fr: "N’importe quand entre chaque tour, soignez 10 dégâts à ce Pokémon.",
				es: "En cualquier momento entre turnos, cura 10 puntos de daño a este Pokémon.",
				it: "Tra un turno e l’altro, in qualsiasi momento, cura questo Pokémon da 10 danni.",
				pt: "A qualquer momento entre as vezes de jogar, cure 10 de danos deste Pokémon.",
				de: "Heile zu einem beliebigen Zeitpunkt zwischen den Zügen 10 Schadenspunkte bei diesem Pokémon."
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
