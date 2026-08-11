import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [261],
	set: Set,

	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slight Intrusion",
			'fr-fr': "Légère Intrusion",
			'es-es': "Ligera Intromisión",
			'it-it': "Coinvolgimento",
			'pt-br': "Leve Invasão",
			'de-de': "Vorwagen"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It has a very tenacious nature. Its acute sense of smell lets it chase a chosen prey without ever losing track.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658738,
				tcgplayer: 272296
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658738,
				tcgplayer: 272296
			}
		},
	],
}

export default card
