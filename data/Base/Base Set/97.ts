import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
		de: "Kampfenergie",
		it: "Energia Combattimento",
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
				cardmarket: 273792,
				tcgplayer: 42441
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
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 660105
			}
		}
	],
}

export default card
