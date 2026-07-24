import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Seer",
		fr: "Tauros",
		de: "Tauros"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	dexId: [
		128,
	],

	hp: 70,

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
				en: "Horn Hazard",
				fr: "Chanc'korne",
				de: "Gefährliches Horn"
			},

			effect: {
				en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the top 6 cards of your deck. Take all Basic Energy cards you find there, show them to your opponent, and then put them into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 30
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Tauros does 20 Damage to itself.",
				fr: "Tauros s'inflige 20 dégâts.",
				de: "Tauros fügt sich selber 20 Schadenspunkte zu."
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
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89760,
				cardmarket: 275008
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
