import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [676],

	name: {
		'en-us': "Furfrou",
		'fr-fr': "Couafarel",
		'es-es': "Furfrou",
		'es-mx': "Furfrou",
		'de-de': "Coiffwaff",
		'it-it': "Furfrou",
		'pt-br': "Furfrou"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hand Trim",
			'fr-fr': "Réduction de Main",
			'es-es': "Recorte de Mano",
			'es-mx': "Corte a Mano",
			'de-de': "Handschnitt",
			'it-it': "Sfoltimano",
			'pt-br': "Tosa Manual"
		},

		effect: {
			'en-us': "Discard random cards from your opponent's hand until they have 5 cards in their hand.",
			'fr-fr': "Défaussez au hasard des cartes de la main de votre adversaire jusqu'à ce qu'il reste 5 cartes dans sa main.",
			'es-es': "Descarta cartas aleatorias de la mano de tu rival hasta que tenga 5 cartas en su mano.",
			'es-mx': "Descarta cartas aleatorias de la mano de tu rival hasta que tenga 5 cartas en su mano.",
			'de-de': "Lege so lange zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel, bis er 5 Karten auf seiner Hand hat.",
			'it-it': "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con cinque carte in mano.",
			'pt-br': "Descarte cartas aleatórias da mão do seu oponente até que ele tenha 5 cartas na mão dele."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'es-mx': "Golpe Cabeza",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684443,
				cardmarket: 877483
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684443,
				cardmarket: 877483
			}
		}
	],

}

export default card
