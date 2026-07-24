import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Élektek",
		de: "Elektek"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [102],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growth Spurt",
				fr: "Absorption électrik",
				de: "Energieanziehung"
			},
			effect: {
				en: "Attach an Energy card from your hand to Exeggcute.",
				fr: "Vous pouvez chercher une carte Énergie de base et l'attacher à Élektek. Mélangez ensuite votre deck.",
				de: "Du kannst dein Deck nach einer Basis-Energiekarte durchsuchen und an Elektek anlegen. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sleep Powder",
				fr: "Renvoi d'énergie",
				de: "Energiereflektion"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Si vous avez des Pokémon sur votre Banc et s'il y a des cartes Énergie de base attachées à Élektek, prenez une de ces cartes Énergie et attachez-la à l'un de ces Pokémon.",
				de: "Falls du mindestens ein Pokémon auf deiner Bank hast und mindestens eine Basis-Energiekarte an Elektek angelegt ist, nimm 1 dieser Energiekarten und lege sie an 1 dieser Pokémon an."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85112,
				cardmarket: 274951
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
