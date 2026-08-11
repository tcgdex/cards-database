import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Draw Energy",
		'fr-fr': "Énergie de Pioche",
		'es-es': "Energía Robo",
		'it-it': "Energia Pesca",
		'pt-br': "Energia de Compra",
		'de-de': "Zug-Energie"
	},

	illustrator: undefined,
	rarity: "Secret Rare",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Cette carte fournit de l’Énergie Colorless. \n\nLorsque vous attachez cette carte de votre main à un Pokémon, piochez une carte.",
		'en-us': "This card provides Colorless Energy. \n\nWhen you attach this card from your hand to a Pokémon, draw a card.",
		'es-es': "Esta carta proporciona 1 Energía Colorless.\n\nCuando unas esta carta de tu mano a 1 Pokémon, roba 1 carta.",
		'it-it': "Questa carta fornisce Energia Colorless.\n\nQuando assegni questa carta dalla tua mano a un Pokémon, pesca una carta.",
		'pt-br': "Esta carta fornece Energia Colorless.\n\nQuando você ligar esta carta da sua mão a 1 Pokémon, compre 1 carta.",
		'de-de': "Diese Karte liefert Colorless-Energie.\n\nWenn du diese Karte aus deiner Hand an ein Pokémon anlegst, ziehe 1 Karte."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 410684,
		tcgplayer: 201636
	}
}

export default card
