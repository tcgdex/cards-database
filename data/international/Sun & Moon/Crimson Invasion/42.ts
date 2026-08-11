import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'es-es': "Grumpig",
		'it-it': "Grumpig",
		'pt-br': "Grumpig",
		'de-de': "Groink"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Own Tempo",
				'fr-fr': "Tempo Perso",
				'es-es': "Ritmo Propio",
				'it-it': "Mente Locale",
				'pt-br': "Ritmo Próprio",
				'de-de': "Tempomacher"
			},
			effect: {
				'en-us': "This Pokémon can’t be Confused.",
				'fr-fr': "Ce Pokémon ne peut pas être Confus.",
				'es-es': "Este Pokémon no puede pasar a estar Confundido.",
				'it-it': "Questo Pokémon non può venire confuso.",
				'pt-br': "Este Pokémon não pode ser Confundido.",
				'de-de': "Dieses Pokémon kann nicht verwirrt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
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
				'en-us': "During your next turn, this Pokémon’s Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Más Psique de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l’attacco Psicamisù di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Carga Psíquica deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Psycho-Plus dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It uses black pearls to amplify its psychic power. It does a strange dance to control foes' minds.",
	},

	thirdParty: {
		cardmarket: 311892,
		tcgplayer: 149065
	}
}

export default card
