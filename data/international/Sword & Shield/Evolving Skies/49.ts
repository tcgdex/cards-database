import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "chibi",

	attacks: [{
		name: {
			'en-us': "Energize",
			'fr-fr': "Énergisant",
			'es-es': "Vigorizar",
			'it-it': "Energizza",
			'pt-br': "Energize",
			'de-de': "Energiezufuhr"
		},

		effect: {
			'en-us': "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
			'pt-br': "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			'de-de': "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Electro Ball",
			'de-de': "Elektroball"
		},

		damage: 30,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "When Pikachu meet, they'll touch their tails together and exchange electricity through them as a form of greeting."
	},

	dexId: [25],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574073,
				tcgplayer: 246881
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751840,
				tcgplayer: 246881
			}
		},
	],
}

export default card
