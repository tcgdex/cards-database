import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Draw Energy",
		fr: "Énergie de Pioche",
		es: "Energía Robo",
		it: "Energia Pesca",
		pt: "Energia de Compra",
		de: "Zug-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque vous attachez cette carte de votre main à un Pokémon, piochez une carte.",
		en: "This card provides Colorless Energy. \n\nWhen you attach this card from your hand to a Pokémon, draw a card.",
		es: "Esta carta proporciona 1 Energía Colorless.\n\nCuando unas esta carta de tu mano a 1 Pokémon, roba 1 carta.",
		it: "Questa carta fornisce Energia Colorless.\n\nQuando assegni questa carta dalla tua mano a un Pokémon, pesca una carta.",
		pt: "Esta carta fornece Energia Colorless.\n\nQuando você ligar esta carta da sua mão a 1 Pokémon, compre 1 carta.",
		de: "Diese Karte liefert Colorless-Energie.\n\nWenn du diese Karte aus deiner Hand an ein Pokémon anlegst, ziehe 1 Karte."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 408639,
		tcgplayer: 201329
	}
}

export default card
