import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [444],
	set: Set,

	name: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'es-es': "Gabite",
		'it-it': "Gabite",
		'pt-br': "Gabite",
		'de-de': "Knarksel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Power Blast",
			'fr-fr': "Violente Déflagration",
			'es-es': "Estallido Vigoroso",
			'it-it': "Forzacolpo",
			'pt-br': "Explosão Poderosa",
			'de-de': "Powerschuss"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "In rare cases, it molts and sheds its scales. Medicine containing its scales as an ingredient will make a weary body feel invigorated.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740600,
				tcgplayer: 523765,
				cardtrader: 265196
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740600,
				tcgplayer: 523765,
				cardtrader: 265196
			}
		},
	],

	illustrator: "Nisota Niso",

	
}

export default card
