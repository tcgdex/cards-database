import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'en-us': "Tyranitar V",
		'fr-fr': "Tyranocif V",
		'es-es': "Tyranitar V",
		'it-it': "Tyranitar V",
		'pt-br': "Tyranitar V",
		'de-de': "Despotar V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Cragalanche",
			'fr-fr': "Lapidalanche",
			'es-es': "Rocalud",
			'it-it': "Valanghiaia",
			'pt-br': "Rochavalanche",
			'de-de': "Grolllawine"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Single Strike Crush",
			'fr-fr': "Écrasement Poing Final",
			'es-es': "Aplastamiento Golpe Brusco",
			'it-it': "Schianto Colpo Singolo",
			'pt-br': "Esmagamento Golpe Decisivo",
			'de-de': "Fokussierter-Angriff-Zermalmer"
		},

		effect: {
			'en-us': "Discard the top 4 cards of your deck.",
			'fr-fr': "Défaussez les 4 cartes du dessus de votre deck.",
			'es-es': "Descarta las 4 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime quattro carte del tuo mazzo.",
			'pt-br': "Descarte as 4 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 4 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 240,
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 546421,
				tcgplayer: 234059
			}
		},
	],
}

export default card
