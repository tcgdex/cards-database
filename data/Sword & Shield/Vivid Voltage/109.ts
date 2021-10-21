import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		it: "Krokorok",
		pt: "Krokorok",
		de: "Rokkaiman"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dredge Up",
				fr: "Extraction",
				es: "Ventilar",
				it: "Dragaggio",
				pt: "Dragar",
				de: "Ausbaggern"
			},
			effect: {
				en: "Discard the top 3 cards of your opponent's deck.",
				fr: "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
				es: "Descarta las 3 primeras cartas de la baraja de tu rival.",
				it: "Scarta le prime tre carte del mazzo del tuo avversario.",
				pt: "Descarte as 3 cartas de cima do baralho do seu oponente.",
				de: "Lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
				es: "Rabieta",
				it: "Collera",
				pt: "Petulância",
				de: "Rappel"
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
				es: "Este Pokémon pasa a estar Confundido.",
				it: "Questo Pokémon viene confuso.",
				pt: "Este Pokémon agora está Confuso.",
				de: "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It conceals itself in sandstorms that Flygon whip up and waits patiently for prey to appear."
	}
}

export default card
