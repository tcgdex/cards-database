import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2018'

const card: Card = {
	dexId: [25],
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	thirdParty: {
		tcgplayer: 180452
	}
}

export default card