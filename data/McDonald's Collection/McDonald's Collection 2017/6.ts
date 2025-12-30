import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [789],
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Cosmog"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	thirdParty: {
		tcgplayer: 152686
	}
}

export default card