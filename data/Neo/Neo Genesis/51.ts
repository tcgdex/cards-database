import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
		de: "Togepi"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Barb",
				fr: "Barbelés empoisonnés",
				de: "Giftzacken"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "A proverb claims that happiness will come to anyone who can make a sleeping Togepi stand up.",
		fr: "Un proverbe prétend que celui qui pourra réveiller un Togepi endormi sera récompensé par un grand bonheur."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274451,
				tcgplayer: 89929
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274451,
				tcgplayer: 89929
			}
		}
	]
}

export default card
