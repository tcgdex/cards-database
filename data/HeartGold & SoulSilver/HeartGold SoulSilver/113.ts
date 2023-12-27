import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Lugia LEGEND",
		fr: "Lugia LÉGENDAIRE",
		de: "Lugia LEGENDE"
	},

	illustrator: "Shinji Higuchi",
	rarity: "LEGEND",
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
	},

	attacks: [{
		name: {
			de: "Urgewaltexplosion"
		},

		damage: 200,

		effect: {
			de: "Lege 1 -Energie, 1 -Energie und 1 -Energie, die an Lugia-LEGENDE angelegt sind, auf deinen Ablagestapel."
		},

		cost: ["Fire", "Water", "Lightning"]
	}]
}

export default card
