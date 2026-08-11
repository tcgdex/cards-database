import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Emboar ex",
		'fr-fr': "Méga-Roitiflam-ex",
		'es-es': "Mega-Emboar ex",
		'de-de': "Mega-Flambirex-ex",
		'it-it': "Mega Emboar-ex",
		'pt-br': "Mega Emboar ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 380,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [500],

	evolveFrom: {
		'en-us': "Pignite",
		'de-de': "Ferkokel",
		'es-es': "Pignite",
		'fr-fr': "Grotichon",
		'it-it': "Pignite",
		'pt-br': "Pignite",
	},

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Crimson Blast",
			'fr-fr': "Explosion Écarlate",
			'es-es': "Estallido Carmesí",
			'de-de': "Feuerrote Explosion",
			'it-it': "Vermiglioscoppio",
			'pt-br': "Explosão Carmim"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 320
	}],

	retreat: 4,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873719,
				tcgplayer: 692119
			}
		},
		{
        	type: 'lenticular',
        	size: 'jumbo',
        	thirdParty: {
        		cardmarket: 873720,
        		tcgplayer: 692116
        	}
        },
	],
}

export default card
