import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stomp Off",
				fr: "Tohu-Bohu",
				es: "Pisotear",
				it: "Pestatura",
				pt: "Sair Irritado",
				de: "Davonstapfen"
			},
			effect: {
				en: "Discard the top 2 cards of your opponent’s deck.",
				fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
				es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
				it: "Scarta le prime due carte del mazzo del tuo avversario.",
				pt: "Descarte as 2 cartas de cima do baralho do seu oponente.",
				de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras’Terre",
				es: "Aterrizaje",
				it: "Schiacciaterra",
				pt: "Aperto de Terra",
				de: "Schollenbrecher"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
