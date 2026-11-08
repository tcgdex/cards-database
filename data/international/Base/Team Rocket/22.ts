import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Dragonite",
		'fr-fr': "Dracolosse obscur",
		'de-de': "Dunkles Dragoran"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco obscur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Summon Minions",
				'fr-fr': "Convocation de serviteurs",
				'de-de': "Summon Minions"
			},
			effect: {
				'en-us': "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Lorsque vous jouez Dracolosse obscur depuis votre main, cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'de-de': "Beschreibung: When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Giant Tail",
				'fr-fr': "Longue queue",
				'de-de': "Giant Tail"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},

			damage: 70
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Sometimes called \"The God of Destruction.\" Its wings are able to support it in spite of its massive weight.",
		'fr-fr': "Il est parfois appelé \"Le dieu destructeur\". Ses ailes le supportent en dépit de sa masse imposante."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274058,
				tcgplayer: 84586
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274058,
				tcgplayer: 84586
			}
		}
	]
}

export default card
