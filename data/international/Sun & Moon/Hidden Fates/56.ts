import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Erika’s Hospitality",
		'fr-fr': "Hospitalité d’Erika",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Vous ne pouvez jouer cette carte que si vous avez 4 autres cartes ou moins dans votre main.\n\nPiochez une carte pour chacun des Pokémon en jeu de votre adversaire.",
		'en-us': "You can play this card only if you have 4 or fewer other cards in your hand.\n\nDraw a card for each of your opponent’s Pokémon in play."
	},
	trainerType: "Supporter",

}

export default card
