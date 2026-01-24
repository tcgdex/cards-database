import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Delibird"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		225,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Present",
				fr: "Cadeau"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball'glace"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	description: {
		en: "It carries food rolled up in its tail. It has the habit of sharing food with people lost in mountains."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278038,
		tcgplayer: 84749
	}
}

export default card
