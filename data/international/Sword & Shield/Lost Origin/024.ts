import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [607],
	set: Set,

	name: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
		'es-es': "Litwick",
		'it-it': "Litwick",
		'pt-br': "Litwick",
		'de-de': "Lichtel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Kindling Panic",
			'fr-fr': "Panique Montante",
			'es-es': "Pánico Encendido",
			'it-it': "Accendipanico",
			'pt-br': "Centelha de Pânico",
			'de-de': "Panik schüren"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		}
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674035,
				tcgplayer: 283895
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674035,
				tcgplayer: 283895
			}
		},
	],
}

export default card
