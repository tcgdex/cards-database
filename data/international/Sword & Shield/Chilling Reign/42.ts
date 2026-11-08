import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [817],
	set: Set,

	name: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'es-es': "Drizzile",
		'it-it': "Drizzile",
		'pt-br': "Drizzile",
		'de-de': "Phlegleon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Sobble",
		'fr-fr': "Larméléon",
		'es-es': "Sobble",
		'it-it': "Sobble",
		'pt-br': "Sobble",
		'de-de': "Memmeon"
	},

	attacks: [{
		name: {
			'en-us': "Bounce",
			'fr-fr': "Rebond",
			'es-es': "Bote",
			'it-it': "Rimbalzo",
			'pt-br': "Ricochete",
			'de-de': "Sprungfeder"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Highly intelligent but also very lazy, it keeps enemies out of its territory by laying traps everywhere."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567122,
				tcgplayer: 241695
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567122,
				tcgplayer: 241695
			}
		},
	],
}

export default card
