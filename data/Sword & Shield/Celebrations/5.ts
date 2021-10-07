import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pikachu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic"
}

export default card