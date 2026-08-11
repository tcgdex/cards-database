import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Night Maintenance",
		fr: "Maintenance nocturne",
		de: "Nächtliche Wartung"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Search your discard pile for up to 3 in any combination of Pokémon and basic Energy cards. Show them to your opponent and shuffle them into your deck.",
		fr: "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 3 Pokémon et cartes Énergie de base. Montrez-les à votre adversaire et mélangez-les à votre deck.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 3 Karten in beliebiger Kombination aus Pokémon- und Basis-Energiekarten. Zeige sie deinem Gegner und mische sie in dein Deck."
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
