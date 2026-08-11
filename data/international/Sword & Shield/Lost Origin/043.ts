import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icicle Punch",
			'fr-fr': "Poing Stalactite",
			'es-es': "Puñetazo Gélido",
			'it-it': "Freddopugno",
			'pt-br': "Soco de Icelo",
			'de-de': "Eiswatsche"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674053,
				tcgplayer: 283917
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674053,
				tcgplayer: 283917
			}
		},
	],
}

export default card
