import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Double Colorless Energy",
		fr: "Énergie doublement incolore",
		de: "Doppel-Farblos-Energie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "L’énergie doublement incolore fournit de l’énergie ColorlessColorless.",
		en: "Double Colorless Energy provides Colorless Colorless Energy",
		de: "Doppel-Farblos-Energie liefert -Energie."
	},

	energyType: "Special",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279075
	}
}

export default card
