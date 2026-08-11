import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [233],
	set: Set,

	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Powered Ball",
			'fr-fr': "Boule Puissante",
			'es-es': "Bola Cargada",
			'it-it': "Palla Potenziata",
			'pt-br': "Bola Energizada",
			'de-de': "Angetriebener Ball"
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
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "After artificial intelligence was implemented in Porygon2, the Pokémon began using a strange language that only other Porygon2 understand.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740681,
				tcgplayer: 523824,
				cardtrader: 265269
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740681,
				tcgplayer: 523824,
				cardtrader: 265269
			}
		},
	],

	illustrator: "kurumitsu",

	
}

export default card
