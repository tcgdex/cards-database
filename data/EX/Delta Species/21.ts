import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon's Electrode",
		fr: "Electrode d'Holon",
		de: "Holon-Lektrobal"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Holon's Voltorb",
		fr: "Voltorbe d'Holon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de lumière",
				de: "Blendende Explosion"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 276784,
		tcgplayer: 86155
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},

	]
}

export default card
