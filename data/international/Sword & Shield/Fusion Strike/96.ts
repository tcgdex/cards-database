import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [603],
	set: Set,

	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity."
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair",
			'de-de': "Kugelblitz",
			'es-es': "Bola Relámpago",
			'pt-br': "Bola de Raios",
			'it-it': "Fulminpalla"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'de-de': "Donner",
			'es-es': "Trueno",
			'pt-br': "Trovão",
			'it-it': "Tuono"
		},

		damage: 80,

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582489,
				tcgplayer: 253252
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582489,
				tcgplayer: 253252
			}
		},
	],
}

export default card
