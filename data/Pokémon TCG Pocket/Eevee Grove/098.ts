import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia",
		fr: "Kirlia"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [281],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Ralts"
	},

	description: {
		en: "It has a psychic power that enables it to distort\nthe space around it and see into the future.",
		fr: "Grâce à ses pouvoirs psychiques, il peut distordre l'espace-temps et ainsi voir l'avenir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slap",
			fr: "Gifle"
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