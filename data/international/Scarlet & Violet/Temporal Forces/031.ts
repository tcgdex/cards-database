import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Licking Flames",
			'fr-fr': "Flammes Effleurantes",
			'es-es': "Lengüetazo en Llamas",
			'it-it': "Fiammalingua",
			'pt-br': "Lambidas Flamejantes",
			'de-de': "Schleckende Flammen"
		},

		effect: {
			'en-us': "Flip 3 coins. For each tails, discard an Energy from this Pokémon.",
			'fr-fr': "Lancez 3 pièces. Pour chaque côté pile, défaussez une Énergie de ce Pokémon.",
			'es-es': "Lanza 3 monedas. Por cada cruz, descarta 1 Energía de este Pokémon.",
			'it-it': "Lancia tre volte una moneta. Ogni volta che esce croce, scarta un'Energia da questo Pokémon.",
			'pt-br': "Jogue 3 moedas. Para cada coroa, descarte uma Energia deste Pokémon.",
			'de-de': "Wirf 3 Münzen. Lege pro Zahl 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "There's a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760661,
				tcgplayer: 542775
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760661,
				tcgplayer: 542775
			}
		},
	],

	illustrator: "Masakazu Fukuda",

}

export default card