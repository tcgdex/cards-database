import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Potion Energy",
		fr: "Énergie potion",
		de: "Trank-Energie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Falls du diese Karte von deiner Hand spielst, entferne eine Schadensmarke von dem Pokémon, unter das du sie legst, falls es welche hat. Trank-Energy spendet -Energie. (Zählt nicht als eine Basis-Energiekarte.)"
	},

	thirdParty: {
		cardmarket: 274135,
		tcgplayer: 88350
	}
}

export default card
