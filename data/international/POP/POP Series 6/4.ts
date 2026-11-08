import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [417],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Minor Errand-Running",
				'fr-fr': "Rendez-vous mineur"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une Carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse tonnerre"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Pachirisu does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Pachirisu s'inflige 10 dégâts."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	description: {
		'en-us': "It makes fur balls that crackle with static electricity. It stores them with berries in tree holes."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87898,
				cardmarket: 277889
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87898,
				cardmarket: 277889
			},
		},
	],

}

export default card
