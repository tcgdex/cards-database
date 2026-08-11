import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",
	illustrator: "nagimiso",

	attacks: [{
		name: {
			'en-us': "Shatter",
			'fr-fr': "Fracas",
			'es-es': "Fragmentar",
			'it-it': "Frantumare",
			'pt-br': "Shatter",
			'de-de': "Zertrümmern"
		},

		effect: {
			'en-us': "Discard a Stadium in play.",
			'fr-fr': "Défaussez un Stade en jeu.",
			'es-es': "Descarta un Estadio en juego.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Discard a Stadium in play.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Slash",
			'de-de': "Schlitzer"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	dexId: [288],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	description: {
		'en-us': "Its stress level rises if it cannot keep moving constantly. Too much stress makes it feel sick."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574185,
				tcgplayer: 246859
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574185,
				tcgplayer: 246859
			}
		},
	],
}

export default card
