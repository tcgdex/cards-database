import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Life Herb",
		'fr-fr': "Herbe sauveuse",
		'de-de': "Lebenskräuter"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, choisissez l’un de vos Pokémon et retirez à ce dernier jusqu’à 6 marqueurs de dégât. Tous les États Spéciaux de ce Pokémon sont également annulés.",
		'en-us': "Flip a coin. If heads, choose 1 of your Pokémon, and remove all Special Conditions and 6 damage counters from that Pokémon (all if there are less than 6).",
		'de-de': "Wirf eine Münze. Bei \"Kopf\" wähle 1 deiner Pokémon und entferne alle Speziellen Zustände und 6 Schadensmarken vom gewählten Pokémon (alle, falls weniger als 6 auf diesem Pokémon liegen)."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86733,
				cardmarket: 279235
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86733,
				cardmarket: 279235
			}
		},
	],

	hp: 0,

}

export default card
