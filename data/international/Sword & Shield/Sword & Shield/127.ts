import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hone Claws",
				'fr-fr': "Aiguisage",
				'es-es': "Afilagarras",
				'it-it': "Unghiaguzze",
				'pt-br': "Garras Afiadas",
				'de-de': "Klauenwetzer"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Slash attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Tranche de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Cuchillada de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Lacerazione di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante o seu próximo turno, o ataque Talho deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Schlitzer dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "Living with a savage, seafaring people has toughened this Pokémon's body so much that parts of it have turned to iron."
	},

	dexId: [52],

	thirdParty: {
		cardmarket: 436744,
		tcgplayer: 208438
	}
}

export default card
