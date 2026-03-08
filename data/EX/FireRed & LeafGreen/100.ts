import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "VS Seeker",
		fr: "Cherche VS",
		de: "Kampffahnder"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Cherchez dans votre pile de défausse une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main.",
		de: "Search your dicard pile for a Supporter card, show it to your opponent, and put it into your hand."
	},

	thirdParty: {
		cardmarket: 276276,
		tcgplayer: 90426
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
