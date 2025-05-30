import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Flabébé",
		fr: "Flabébé",
		de: "Flabébé",
		it: "Flabébé",
		es: "Flabébé",
		pt: "Flabébé"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Pollen Shot",
			fr: "Tir Pollen",
			de: "Pollenschuss",
			it: "Colpo Pollinare",
			es: "Lanzamiento de Polen",
			pt: "Arremesso de Pólen"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card