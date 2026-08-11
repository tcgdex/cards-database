import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'de-de': "Lorblatt"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		153,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],

			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre toxik",
				'de-de': "Poisonpowder"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Pollen Shield",
				'fr-fr': "Bouclier pollen",
				'de-de': "Pollen Shield"
			},
			effect: {
				'en-us': "During your opponent's next turn, Bayleef can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, Macronium ne peut pas devenir Endormir, Confus, Paralysé ou Empoisonné. (Tous les autres effets d'attaques, Pouvoir Pokémon et cartes Dresseur sont toujours actifs.)",
				'de-de': "During your opponent's next turn, Bayleef can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A spicy aroma emanates from around its neck. The aroma acts as a stimulant to restore health.",
		'fr-fr': "Un arôme épicé émane de son tour de cou. Cet arôme agit comme un stimulant réjuvénateur."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274428,
				tcgplayer: 83743
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274428,
				tcgplayer: 83743
			}
		}
	]
}

export default card
