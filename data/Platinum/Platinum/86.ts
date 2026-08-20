import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Poochyena",
		fr: "Medhyena",
		de: "Fiffyen"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [261],

	hp: 50,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Howl",
				fr: "Grondement",
				de: "Jauler"
			},
			effect: {
				en: "Search your deck for Poochyena and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Medhyena dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Fiffyen-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide",
				de: "Ausfall"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "A Pokémon with persistent nature, it chases its prey until the prey becomes exhausted.",
		de: "Ein beharrliches PKMN, das seine Beute jagt, bis diese erschöpft ist."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88301,
				cardmarket: 278507
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278507,
				tcgplayer: 88301
			}
		}
	],

}

export default card
