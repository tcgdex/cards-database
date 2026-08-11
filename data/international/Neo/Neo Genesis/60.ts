import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
		de: "Hoothoot"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		163,
	],

	hp: 50,

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
				en: "Hypnosis",
				fr: "Hypnose",
				de: "Hypnosis"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Koud'bec",
				de: "Peck"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "It always stands on one foot. It changes feet so fast that the movement can rarely be seen.",
		fr: "Il se tient toujours sur une patte. Il change de patte si rapidement qu'on ne peut pas voir le mouvement."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274460,
				tcgplayer: 86169
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274460,
				tcgplayer: 86169
			}
		}
	]
}

export default card
