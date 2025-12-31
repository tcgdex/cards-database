import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektrik",
		fr: "Lampéroie"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Tynamo"
	},

	description: {
		en: "They coil around foes and shock them with\nelectricity-generating organs that seem simply\nto be circular patterns.",
		fr: "Ses taches rondes sont des organes qui émettent de l'électricité. Il s'enroule autour de ses proies et les électrocute."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electro Ball",
			fr: "Boule Élek"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card