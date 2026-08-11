import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Latias",
		'fr-fr': "Latias"
	},

	illustrator: "rika",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [380],
	hp: 90,
	types: ["Psychic"],

	description: {
		'en-us': "It communicates using telepathy. Its body is\ncovered in down that refracts light to make\nit invisible.",
		'fr-fr': "Il est doué d'empathie. Le duvet qui recouvre son corps réfléchit la lumière et le rend invisible."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Crossing Flights",
			'fr-fr': "Vols Croisés"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			'en-us': "If Latios is on your Bench, this attack does 20 more damage.",
			'fr-fr': "Si  est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card