import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Floragato",
		fr: "Matourgeon",
		de: "Feliospa",
		it: "Floragato",
		es: "Floragato",
		pt: "Floragato"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			it: "Lacerazione",
			es: "Cuchillada",
			pt: "Talho"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
			de: "Blattschritt",
			it: "Passofoglia",
			es: "Paso Hoja",
			pt: "Passo de Folha"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card