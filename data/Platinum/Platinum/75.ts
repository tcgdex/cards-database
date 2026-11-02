import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [88],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Division",
				fr: "Division",
				de: "Teilung"
			},
			effect: {
				en: "Search your deck for Grimer and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Tadmorv dans votre deck et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Sleima-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz toxik",
				de: "Giftwolke"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		en: "It was born when sludge in a dirty stream was exposed to the moon's X-rays. It appears among filth.",
		de: "Es wurde geboren, als Schlamm von den Strahlen des Mondes getroffen wurde. Es erscheint, wo Unrat ist."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85912,
				cardmarket: 278496
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278496,
				tcgplayer: 85912
			}
		}
	],

}

export default card
