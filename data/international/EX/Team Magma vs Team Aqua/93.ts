import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Sceptile ex",
		'fr-fr': "Jungko ex",
		'de-de': "Gewaldro ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [254],

	hp: 150,

	stage: "Stage2",
	types: [
		"Grass"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Green Heal",
				'fr-fr': "Guérison verte",
				'de-de': "Green Heal"
			},
			effect: {
				'en-us': "Remove 4 damage counters from each of your Pokémon that has Grass Energy attached. If that Pokémon has less than 4 damage counters, remove all of them.",
				'fr-fr': "Retirez 4 marqueurs de dégât à chacun de vos Pokémon possédant une Énergie . Si ces Pokémon possèdent moins de 4 marqueurs de dégât, retirez-les tous.",
				'de-de': "Remove 4 damage counters from each of your Pokémon that has  Energy attached. If that Pokémon has less than 4 damage counters, remove all of them."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Ring",
				'fr-fr': "Anneau de poison",
				'de-de': "Poison Ring"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Il ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				'de-de': "The Defending Pokémon is now Poisoned. The defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup déchirant",
				'de-de': "Slashing Strike"
			},
			effect: {
				'en-us': "Sceptile ex can't use Slashing Strike during your next turn.",
				'fr-fr': "Jungko ex ne peut pas utiliser Coup déchirant lors de votre prochain tour.",
				'de-de': "Sceptile ex can't use Slashing strike during your next turn."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88954,
				cardmarket: 276070
			}
		}
	]
}

export default card
