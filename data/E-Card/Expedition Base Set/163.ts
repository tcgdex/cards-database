import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
		de: "Elektroenergie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 275038,
		tcgplayer: 86759
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
