import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Super Energy Retrieval",
		'fr-fr': "Super sauvegarde d'Énergie",
		'de-de': "Super-Energiezurückgewinnung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Trade 2 of the other cards in your hand for 4 basic Energy cards from your discard pile. If you have fewer than 4 basic Energy cards there, take all of them.",
		'fr-fr': "Échangez 2 des autres cartes de votre main contre 4 Énergie de base de votre pile de défausse. Si vous avez moins de 4 cartes Énergie de base dans votre pile de défausse, prenez-les toutes.",
		'de-de': "Trade 2 of the other cards in your hand for 4 basic Energy cards from your discard pile. If you have fewer than 4 basic Energy cards there, take all of them."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274489,
				tcgplayer: 89628
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274489,
				tcgplayer: 89628
			}
		}
	]
}

export default card
