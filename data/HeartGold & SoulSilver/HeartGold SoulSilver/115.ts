import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
		de: "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279087,
		tcgplayer: 85879
	}
}

export default card
