import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [612],
	set: Set,

	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
		'es-es': "Haxorus",
		'it-it': "Haxorus",
		'pt-br': "Haxorus",
		'de-de': "Maxax"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 60
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			'en-us': "Wild Axe",
			'fr-fr': "Hache Sauvage",
			'es-es': "Hachazo Salvaje",
			'it-it': "Ascia Selvaggia",
			'pt-br': "Machado Selvagem",
			'de-de': "Wildes Beil"
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

	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Its resilient tusks are its pride and joy. It licks up dirt to take in the minerals it needs to keep its tusks in top condition.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608658,
				tcgplayer: 263833
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608658,
				tcgplayer: 263833
			}
		},
	],
}

export default card
