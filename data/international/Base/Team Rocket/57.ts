import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'de-de': "Sleima"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 40,

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
				'en-us': "Poison Gas",
				'fr-fr': "Gaz toxik",
				'de-de': "Poison Gas"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sticky Hands",
				'fr-fr': "Mains collantes",
				'de-de': "Sticky hands"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé ; si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Flip a coin. if heads, this attack does 10 damage plus 20 more damage and the defending Pokémon is now Paralyzed; if tails, this attack does 10 damage."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It has recently been found that Grimers are formed in waste-processing plants, and can move into towns via sewers.",
		'fr-fr': "On a récemment découvert que les Tadmorv prennent forme dans les usines de traitement des déchets, et peuvent se déplacer vers les villes à travers les égouts.."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274110,
				tcgplayer: 85905
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274110,
				tcgplayer: 85905
			}
		}
	]
}

export default card
