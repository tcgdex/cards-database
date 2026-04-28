import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie",
		it: "Energia Fuoco",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273793,
				tcgplayer: 42442
			}
		},
		{
			type: "normal",
			subtype: "unlimited"
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless"
		},
		{
			type: "V2",
			cardmarketLabels: ["Soy"]
		},
		{
			type: "V2",
			cardmarketLabels: ["Soy"],
			thirdParty: {
				cardmarket: 660103
			}
		}
	],
}

export default card
