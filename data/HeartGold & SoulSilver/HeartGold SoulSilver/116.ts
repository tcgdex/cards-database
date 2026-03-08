import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		de: "Feuerenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	variants: [
		{
			type: "normal"
		}
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279088,
		tcgplayer: 85464
	}
}

export default card
