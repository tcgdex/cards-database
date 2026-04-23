import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Imposter Professor Oak",
		fr: "Faux Professeur Chen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		en: "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.",
		fr: "Votre adversaire mélange sa main avec son deck, puis pioche 7 cartes."
	},

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576774
	}
}

export default card
