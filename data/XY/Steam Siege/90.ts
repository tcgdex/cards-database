import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fiddle Around",
				fr: "Bidouillage",
				es: "Juguetear",
				it: "Perditempo",
				pt: "Desordenar",
				de: "Herumtüfteln"
			},
			effect: {
				en: "Look at the top 3 cards of your opponent's deck and put them back in any order.",
				fr: "Regardez les 3 cartes du dessus du deck de votre adversaire et replacez-les dans l'ordre de votre choix.",
				es: "Mira las 3 primeras cartas de la baraja de tu rival y vuelve a ponerlas en la parte superior de su baraja en el orden que quieras.",
				it: "Guarda le prime tre carte del mazzo del tuo avversario e rimettile a posto nell'ordine che preferisci.",
				pt: "Olhe os 3 cards de cima do baralho do seu oponente e coloque-os de volta em qualquer ordem.",
				de: "Schau dir die obersten 3 Karten des gegnerischen Decks an und lege sie in beliebiger Reihenfolge zurück in sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Jab",
				fr: "Coup d'Queue",
				es: "Puya Cola",
				it: "Stoccacoda",
				pt: "Sova de Cauda",
				de: "Schweifstoß"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 291650
	}
}

export default card
