import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [281],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Ralts"
	},

	description: {
		'en-us': "It has a psychic power that enables it to distort\nthe space around it and see into the future.",
		'fr-fr': "Grâce à ses pouvoirs psychiques, il peut distordre l'espace-temps et ainsi voir l'avenir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card