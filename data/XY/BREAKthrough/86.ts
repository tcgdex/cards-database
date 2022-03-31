import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		674,
	],
	hp: 60,
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
				en: "Pompous Punch",
				fr: "Coup d'Poing Solennel",
				es: "Puño Pomposo",
				it: "Tronfiopugno",
				pt: "Soco Pomposo",
				de: "Pompöser Punch"
			},
			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival.",
				it: "Scarta una carta a caso dalla mano del tuo avversario.",
				pt: "Descarte um card aleatório da mão do seu oponente.",
				de: "Nimm 1 zufällige Karte aus der verdeckten Hand deines Gegners und lege sie auf seinen Ablagestapel."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
