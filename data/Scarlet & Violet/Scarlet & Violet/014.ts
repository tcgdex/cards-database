import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Floragato",
		fr: "Matourgeon",
		es: "Floragato",
		it: "Floragato",
		pt: "Floragato",
		de: "Feliospa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Sprigatito"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			es: "Paso Hoja",
			it: "Passofoglia",
			pt: "Passo de Folha",
			de: "Blattschritt"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card