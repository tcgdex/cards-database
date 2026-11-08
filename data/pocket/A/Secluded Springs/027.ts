import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [603],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Tynamo"
	},

	description: {
		'en-us': "They coil around foes and shock them with\nelectricity-generating organs that seem simply\nto be circular patterns.",
		'fr-fr': "Ses taches rondes sont des organes qui émettent de l'électricité. Il s'enroule autour de ses proies et les électrocute."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek"
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