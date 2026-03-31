import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Furfrou",
		fr: "Couafarel",
		es: "Furfrou",
		de: "Coiffwaff",
		it: "Furfrou",
		pt: "Furfrou"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		676
	],
	hp: 90,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Hand Trim",
				fr: "Réduction de Main",
				es: "Recorte de Mano",
				de: "Handschnitt",
				it: "Sfoltimano",
				pt: "Tosa Manual"
			},
			effect: {
				en: "Discard random cards from your opponent's hand until they have 5 cards in their hand.",
				fr: "Défaussez au hasard des cartes de la main de votre adversaire jusqu'à ce qu'il reste 5 cartes dans sa main.",
				es: "Descarta cartas aleatorias de la mano de tu rival hasta que tenga 5 cartas en su mano.",
				de: "Lege so lange zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel, bis er 5 Karten auf seiner Hand hat.",
				it: "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con cinque carte in mano.",
				pt: "Descarte cartas aleatórias da mão do seu oponente até que ele tenha 5 cartas na mão dele."
			}
		},
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
				es: "Golpe Cabeza",
				de: "Kopfnuss",
				it: "Bottintesta",
				pt: "Cabeçada"
			},
			damage: "30"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Teeziro",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684443,
		cardmarket: 877483
	}
}

export default card
