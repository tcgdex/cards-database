import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		de: "Felori",
		it: "Sprigatito",
		es: "Sprigatito",
		pt: "Sprigatito"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			de: "Blattwerk",
			it: "Fogliame",
			es: "Follaje",
			pt: "Folhagem"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card