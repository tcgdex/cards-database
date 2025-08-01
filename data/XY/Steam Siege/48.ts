import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		it: "Litwick",
		pt: "Litwick",
		de: "Lichtel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		607,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slightly Simmer",
				fr: "Léger Frémissement",
				es: "A Fuego Lento",
				it: "Lumicino",
				pt: "Fogo Brando",
				de: "Auf kleiner Flamme"
			},
			effect: {
				en: "Search your deck for up to 2 cards and discard them. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 cartes dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas y descártalas. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due carte e scartale. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 2 cards e descarte-os. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 291539
	}
}

export default card
