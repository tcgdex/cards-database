import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Camping Gear",
		fr: "Kit de Camping"
	},

	illustrator: "sadaji",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for a card and put it into your hand. Then, shuffle your deck. Your turn ends.",
		fr: "Cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Votre tour se termine."
	},

	trainerType: "Item"
}

export default card