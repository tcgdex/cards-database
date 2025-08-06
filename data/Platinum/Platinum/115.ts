import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Pokémon Rescue",
		fr: "Rescousse Pokémon",
		de: "Pokémon-Rettungsaktion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez un Pokémon dans votre pile de défausse, montrez-le à votre adversaire et placez-le dans votre main.",
		de: "Search your discard pile for a Pokémon, show it to your opponent, and put it into your hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278536
	}
}

export default card
