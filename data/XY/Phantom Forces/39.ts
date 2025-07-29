import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Munna",
		fr: "Munna",
		es: "Munna",
		it: "Munna",
		pt: "Munna",
		de: "Somniam"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		517,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "See Through",
				fr: "Main Transparente",
				es: "Transparencia",
				it: "Sbirciatina",
				pt: "Transparência",
				de: "Durchblick"
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
				fr: "Votre adversaire montre sa main.",
				es: "Tu rival enseña las cartas de su mano.",
				it: "Il tuo avversario mostra le carte che ha in mano.",
				pt: "Seu oponente revela a própria mão.",
				de: "Dein Gegner deckt seine Handkarten auf."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Double Headbutt",
				fr: "Double Coup d'Boule",
				es: "Doble Cabezazo",
				it: "Doppia Bottintesta",
				pt: "Cabeçada Dupla",
				de: "Doppelte Kopfnuss"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Esse ataque causa 20 de danos vezes o número de caras.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281845
	}
}

export default card
