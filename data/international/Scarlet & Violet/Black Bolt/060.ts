import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [589],
	set: Set,

	name: {
		'en-us': "Escavalier",
		'fr-fr': "Lançargot",
		'de-de': "Cavalanzas",
		'it-it': "Escavalier",
		'pt-br': "Escavalier",
		'es-es': "Escavalier",
		'es-mx': "Escavalier"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'de-de': "Laukaps",
		'it-it': "Karrablast",
		'pt-br': "Karrablast",
		'es-es': "Karrablast",
		'es-mx': "Karrablast"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Wild Lances",
			'fr-fr': "Lances Sauvages",
			'de-de': "Wilde Lanzen",
			'it-it': "Lance Feroci",
			'pt-br': "Lanças Selvagens",
			'es-es': "Lanzas Salvajes",
			'es-mx': "Lanzas Salvajes"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836033,
				tcgplayer: 642514
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836033,
				tcgplayer: 642514
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836416,
				tcgplayer: 642756
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836414,
				tcgplayer: 642756
			}
		}
	]
}

export default card
