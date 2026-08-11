import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Drone Rotom",
		'fr-fr': "Motisma Drone",
		'es-es': "Rotom Dron",
		'it-it': "Rotom Drone",
		'pt-br': "Drone Rotom",
		'de-de': "Dronen-Rotom"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Your opponent reveals their hand. If they do, look at the top card of your opponent's deck.",
		'fr-fr': "Votre adversaire dévoile sa main. Dans ce cas, regardez la carte du dessus du deck de votre adversaire.",
		'es-es': "Tu rival enseña las cartas de su mano. Si lo hace, mira la primera carta de la baraja de tu rival.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano. Se lo fa, guarda la prima carta del suo mazzo.",
		'pt-br': "Seu oponente revela a própria mão. Se ele(a) fizer isto, olhe a carta de cima do baralho do seu oponente.",
		'de-de': "Dein Gegner zeigt dir seine Handkarten. Wenn er das macht, schau dir die oberste Karte des Decks deines Gegners an."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512465,
				tcgplayer: 226504
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512465,
				tcgplayer: 226504
			}
		},
	],
}

export default card
