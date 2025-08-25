import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		fr: "Taupikeau",
		en: "Wiglett",
		es: "Wiglett",
		it: "Wiglett",
		pt: "Wiglett",
		de: "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Pluie Éclaboussante",
			en: "Rain Splash",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Pani Kobayashi",

	thirdParty: {
		cardmarket: 725138
	}
}

export default card