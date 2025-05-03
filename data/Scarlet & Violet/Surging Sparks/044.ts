import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			es: "Arremeter",
			it: "Affondo Lungo",
			pt: "Bote",
			de: "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Ice Ball",
			fr: "Ball'Glace",
			es: "Bola Hielo",
			it: "Palla Gelo",
			pt: "Bola de Gelo",
			de: "Frostbeule"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
