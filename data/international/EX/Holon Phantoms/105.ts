import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'de-de': "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 277075,
		tcgplayer: 85876
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
