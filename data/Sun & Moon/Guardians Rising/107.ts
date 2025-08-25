import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Patrat",
		fr: "Ratentif",
		es: "Patrat",
		it: "Patrat",
		pt: "Patrat",
		de: "Nagelotz"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		504,
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
				en: "Glance",
				fr: "Coup d’Œil",
				es: "Ojeada",
				it: "Occhiatina",
				pt: "Olhada de Relance",
				de: "Kurzer Blick"
			},
			effect: {
				en: "Look at the top card of your opponent’s deck.",
				fr: "Regardez la carte du dessus du deck de votre adversaire.",
				es: "Mira la primera carta de la baraja de tu rival.",
				it: "Guarda la prima carta del mazzo del tuo avversario.",
				pt: "Olhe a primeira carta do baralho do seu oponente.",
				de: "Schau dir die oberste Karte des Decks deines Gegners an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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
		cardmarket: 297559,
		tcgplayer: 131025
	}
}

export default card
