import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Night Maintenance",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Search your discard pile for up to 3 in any combination of Pokémon and basic Energy cards. Show them to your opponent and shuffle them into your deck."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278410
	}
}

export default card
