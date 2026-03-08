import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [536],
	set: Set,

	name: {
		fr: "Batracné",
		en: "Palpitoad",
		es: "Palpitoad",
		it: "Palpitoad",
		pt: "Palpitoad",
		de: "Mebrana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		fr: "Tritonde",
		en: "Tympole",
		es: "Tympole",
		it: "Tympole",
		pt: "Tympole",
		de: "Schallquap"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Pluie Éclaboussante",
			en: "Rain Splash",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "sowsow",

	thirdParty: {
		cardmarket: 725131
	}
}

export default card