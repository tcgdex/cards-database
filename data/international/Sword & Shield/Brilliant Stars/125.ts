import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'de-de': "Chillabell"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Triple Axel",
			'fr-fr': "Triple Axel",
			'es-es': "Triple Axel",
			'it-it': "Triplo Axel",
			'pt-br': "Pinote Triplo",
			'de-de': "Dreifach-Axel"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608671,
				tcgplayer: 263848
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608671,
				tcgplayer: 263848
			}
		},
	],
}

export default card
