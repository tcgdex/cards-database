import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Carvanha",
		fr: "Carvanha",
		es: "Carvanha",
		it: "Carvanha",
		pt: "Carvanha",
		de: "Kanivanha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "NC Empire",

	description: {
		en: "With its sturdy jaws and fangs, it can easily chomp wooden boats to splinters. It fights with Basculin over food."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite"
		},

		damage: 10
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card