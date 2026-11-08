import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Emboar ex",
		'fr-fr': "Méga-Roitiflam-ex",
		'es-es': "Mega-Emboar ex",
		'es-mx': "Mega-Emboar ex",
		'de-de': "Mega-Flambirex-ex",
		'it-it': "Mega Emboar-ex",
		'pt-br': "Mega Emboar ex"
	},
	evolveFrom: {
		'en-us': "Pignite",
		'de-de': "Ferkokel",
		'es-es': "Pignite",
		'es-mx': "Pignite",
		'fr-fr': "Grotichon",
		'it-it': "Pignite",
		'pt-br': "Pignite",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [500],
	hp: 380,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Crimson Blast",
			'fr-fr': "Explosion Écarlate",
			'es-es': "Estallido Carmesí",
			'es-mx': "Explosión Carmesí",
			'de-de': "Feuerrote Explosion",
			'it-it': "Vermiglioscoppio",
			'pt-br': "Explosão Carmim"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 320
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869642,
				tcgplayer: 675843
			}
		}
	],
}

export default card
