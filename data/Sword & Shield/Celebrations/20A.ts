import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		en: "Cleffa",
		fr: "Dialga"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Eeeeeeek",
			fr: "Reflux Temporel"
		},

		effect: {
			en: "Shuffle your hand into your deck, then draw 7 cards.",
			fr: "Ajoutez à votre main une carte de votre pile de défausse."
		},

		cost: ["Colorless"]
	}],

	retreat: 0,

	description: {
		en: "Because of its unusual, star-like silhouette, people believe that it came here on a meteor."
	},

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576779
	}
}

export default card
