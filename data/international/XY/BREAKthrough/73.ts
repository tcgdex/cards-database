import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'es-es': "Elgyem",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'de-de': "Pygraulon"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		605,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psych Up",
				'fr-fr': "Boost",
				'es-es': "Más Psique",
				'it-it': "Psicamisù",
				'pt-br': "Carga Psíquica",
				'de-de': "Psycho-Plus"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Psych Up attack does 20 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Boost de ce Pokémon inflige 20 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Más Psique de este Pokémon hace 20 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Psicamisù di questo Pokémon infligge 20 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Carga Psíquica deste Pokémon causará 20 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Psycho-Plus dieses Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Rumors of its origin are linked to a UFO crash site in the desert 50 years ago.",
	},

	thirdParty: {
		cardmarket: 286319,
		tcgplayer: 107192
	}
}

export default card
