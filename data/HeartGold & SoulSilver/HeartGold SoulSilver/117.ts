import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
		de: "Wasserenergie"
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
		cardmarket: 279089,
		tcgplayer: 90512
	}
}

export default card
