import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Flaaffy",
		'fr-fr': "Lainergie obscur",
		'de-de': "Dunkles Waaty"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "High Voltage",
				'fr-fr': "Haut voltage",
				'de-de': "High Voltage"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur pendant son prochain tour.",
				'de-de': "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Stun Wave",
				'fr-fr': "Para-vague",
				'de-de': "Stun Wave"
			},
			effect: {
				'en-us': "If the Defending Pokémon has a Pokémon Power, that power stops working until the end of your next turn.",
				'fr-fr': "Si le Pokémon Défenseur a un Pouvoir Pokémon, ce pouvoir cesse de fonctionner jusqu'à la fin de votre prochain tour.",
				'de-de': "If the Defending Pokémon has a Pokémon Power, that Power stops working until the end of your next turn."
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
	retreat: 1,


	description: {
		'en-us': "As a result of storing massive amounts of electricity there, it can no longer grow wool on certain areas of its body.",
		'fr-fr': "À cause des énormes quantités d'électricité qu'il stocke, sa laine ne pousse plus à certains endroits de son corps."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274686,
				tcgplayer: 84595
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274686,
				tcgplayer: 84595
			}
		}
	]
}

export default card
