import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Night Maintenance",
		de: "Nächtliche Wartung"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your discard pile for up to 3 in any combination of Pokémon and basic Energy cards. Show them to your opponent and shuffle them into your deck.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 3 Karten in beliebiger Kombination aus Pokémon- und Basis-Energiekarten. Zeige sie deinem Gegner und mische sie in dein Deck."
	},

	trainerType: "Item",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278410,
				tcgplayer: 87752
			}
		},
	],
}

export default card
