import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Suicune & Entei LEGEND",
		fr: "Suicune & Entei LÉGENDE (haut)",
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 160,

	types: [
		"Water",
		"Fire",
	],

	suffix: "Legend",
	stage: "Basic",
	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
