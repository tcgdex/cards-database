import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",
	illustrator: "Yukiko Baba",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Headbutt",
			'de-de': "Kopfnuss"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Shakedown",
			'fr-fr': "Dépouiller",
			'es-es': "Conmocionar",
			'it-it': "Scossone",
			'pt-br': "Shakedown",
			'de-de': "Abschütteln"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Discard a random card from your opponent's hand.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'de-de': "Zurrokex"
	},

	description: {
		'en-us': "While mostly known for having the temperament of an aggressive ruffian, this Pokémon takes very good care of its family, friends, and territory."
	},

	dexId: [560],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574147,
				tcgplayer: 246905
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574147,
				tcgplayer: 246905
			}
		},
	],
}

export default card
