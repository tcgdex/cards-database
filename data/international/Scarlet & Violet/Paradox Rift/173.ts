import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Roark",
		'fr-fr': "Pierrick",
		'es-es': "Roco",
		'it-it': "Pedro",
		'pt-br': "Roark",
		'de-de': "Veit"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. Put a Basic Energy card from your discard pile into your hand.",
		'fr-fr': "Piochez 2 cartes. Ajoutez une carte Énergie de base de votre pile de défausse à votre main.",
		'es-es': "Roba 2 cartas. Pon 1 carta de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Pesca due carte. Prendi una carta Energia base dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
		'pt-br': "Compre 2 cartas. Coloque uma carta de Energia Básica da sua pilha de descarte na sua mão.",
		'de-de': "Ziehe 2 Karten. Nimm 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740716,
				tcgplayer: 523854,
				cardtrader: 265553
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740716,
				tcgplayer: 523854,
				cardtrader: 265553
			}
		},
	],

	illustrator: "Ryuta Fuse",

	
}

export default card
