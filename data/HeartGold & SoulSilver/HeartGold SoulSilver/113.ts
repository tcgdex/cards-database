import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Lugia LEGEND",
		fr: "Lugia LÉGENDAIRE",
	},

	illustrator: "Shinji Higuchi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 130,

	types: [
		"Water",
	],

	suffix: "Legend",
	stage: "Basic",
	retreat: 0,

	description: {
		en: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
