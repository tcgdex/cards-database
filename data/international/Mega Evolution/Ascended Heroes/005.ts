import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika's Weepinbell",
		'fr-fr': "Boustiflor d'Erika",
		'es-es': "Weepinbell de Erika",
		'es-mx': "Weepinbell de Erika",
		'de-de': "Erikas Ultrigaria",
		'it-it': "Weepinbell di Erika",
		'pt-br': "Weepinbell da Érica"
	},

	evolveFrom: {
		'en-us': "Erika's Bellsprout",
		'fr-fr': "Chétiflor d'Erika",
		'es-es': "Bellsprout de Erika",
		'es-mx': "Bellsprout de Erika",
		'de-de': "Erikas Knofensa",
		'it-it': "Bellsprout di Erika",
		'pt-br': "Bellsprout da Érica",
	},

	illustrator: "LINNE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Melt",
			'fr-fr': "Dissolution",
			'es-es': "Derretir",
			'es-mx': "Derretir",
			'de-de': "Schmelzen",
			'it-it': "Liquefazione",
			'pt-br': "Derreter"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leafy Cyclone",
			'fr-fr': "Cyclone Arboré",
			'es-es': "Ciclón Hojarasca",
			'es-mx': "Ciclón Frondoso",
			'de-de': "Blättergewirbel",
			'it-it': "Fogliaturbine",
			'pt-br': "Ciclone Folhoso"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use attacks.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar ataques.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "It spits out Poison Powder to immobilize the enemy and then finishes it with a spray of Acid.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869616,
				tcgplayer: 675817
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 870142,
				tcgplayer: 676855
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870141,
				tcgplayer: 676995
			}
		},
	],
}

export default card
