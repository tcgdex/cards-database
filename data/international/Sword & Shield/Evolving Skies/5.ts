import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "otumami",

	attacks: [{
		name: {
			'en-us': "Astonish",
			'fr-fr': "Étonnement",
			'es-es': "Impresionar",
			'it-it': "Sgomento",
			'pt-br': "Astonish",
			'de-de': "Erstauner"
		},

		effect: {
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'pt-br': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
		},

		damage: 10,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "It attaches itself to a tree branch using the top of its head. Strong winds can sometimes make it fall."
	},

	dexId: [273],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574029,
				tcgplayer: 246820
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574029,
				tcgplayer: 246820
			}
		},
	],
}

export default card
