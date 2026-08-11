import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Colress's Experiment",
		'fr-fr': "Expérience de Nikolaï",
		'es-es': "Experimento de Acromo",
		'it-it': "Esperimento di Acromio",
		'pt-br': "Experimento do Colress",
		'de-de': "Achromas' Experiment"
	},

	illustrator: "kantaro",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Look at the top 5 cards of your deck and put 3 of them into your hand. Put the other cards in the Lost Zone.",
		'fr-fr': "Regardez les 5 cartes du dessus de votre deck, puis ajoutez 3 d'entre elles à votre main. Placez les autres cartes dans la Zone Perdue.",
		'es-es': "Mira las 5 primeras cartas de tu baraja y pon 3 de ellas en tu mano. Pon el resto de las cartas en la Zona Perdida.",
		'it-it': "Guarda le prime cinque carte del tuo mazzo e aggiungi tre di esse alle carte che hai in mano. Metti le altre carte nell'area perduta.",
		'pt-br': "Olhe as 5 cartas de cima do seu baralho e coloque 3 delas na sua mão. Coloque as outras cartas na Zona Perdida.",
		'de-de': "Schau dir die obersten 5 Karten deines Decks an und nimm 3 von ihnen auf deine Hand. Lege die anderen Karten ins Nirgendwo."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691939,
				tcgplayer: 478087
			}
		},
	],
}

export default card
