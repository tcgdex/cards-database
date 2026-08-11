import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'de-de': "Knuddeluff"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lullaby",
				'fr-fr': "Comptine",
				'de-de': "Wiegenlied"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das verteidigende Pokémon ist jetzt schlafend"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Do the Wave",
				'fr-fr': "Faites la vague",
				'de-de': "Wellenreiten"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each of your Benched Pokémon.",
				'fr-fr': "Infligez 10 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de votre Banc.",
				'de-de': "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
		'fr-fr': "En cas de danger, il gonfle d'air son corps doux et potelé dans des proportions gigantesques."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273813,
				tcgplayer: 106994
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273813,
				tcgplayer: 106994
			}
		}
	],
}

export default card
