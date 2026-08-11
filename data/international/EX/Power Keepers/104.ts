import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Fire Energy",
		'fr-fr': "Énergie Feu",
		'de-de': "Feuerenergie"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 277410,
		tcgplayer: 85462
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

