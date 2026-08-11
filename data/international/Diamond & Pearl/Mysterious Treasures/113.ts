import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Night Maintenance",
		'fr-fr': "Maintenance nocturne",
		'de-de': "Nächtliche Wartung"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Search your discard pile for up to 3 in any combination of Pokémon and basic Energy cards. Show them to your opponent and shuffle them into your deck.",
		'fr-fr': "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 3 Pokémon et cartes Énergie de base. Montrez-les à votre adversaire et mélangez-les à votre deck.",
		'de-de': "Durchsuche deinen Ablagestapel nach bis zu 3 Karten in beliebiger Kombination aus Pokémon- und Basis-Energiekarten. Zeige sie deinem Gegner und mische sie in dein Deck."
	},

	thirdParty: {
		cardmarket: 277742,
		tcgplayer: 87750
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
