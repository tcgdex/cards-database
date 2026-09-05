import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Chespin",
		fr: "Marisson",
		de: "Igamaro"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		650,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				de: "Rankenhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
				de: "Samenbomben"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
		de: "Wenn es seine Kraft auf die sonst eher weichen Stacheln auf seinem Kopf konzentriert, werden diese robust genug, um damit Steine zu zertrümmern."
	},
	
	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538828,
				tcgplayer: 232321
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538833,
				tcgplayer: 232321
			}
		}
	]
}

export default card

