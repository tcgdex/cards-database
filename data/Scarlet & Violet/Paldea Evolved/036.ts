import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Crocogril",
		en: "Crocalor",
		es: "Crocalor",
		it: "Crocalor",
		pt: "Crocalor",
		de: "Lokroko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Crachage de Feu Régulier",
			en: "Steady Firebreathing",
			es: "Lanzallamas Continuo",
			it: "Soffiofuoco Mirato",
			pt: "Hálito de Fogo Constante",
			de: "Stetiger Feuerhauch"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			fr: "Mégaphone",
			en: "Hyper Voice",
			es: "Vozarrón",
			it: "Granvoce",
			pt: "Hipervoz",
			de: "Schallwelle"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Fuecoco"
	}
}

export default card