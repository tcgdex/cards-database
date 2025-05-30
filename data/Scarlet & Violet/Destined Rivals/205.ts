import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Clauncher",
		fr: "Flingouste",
		de: "Scampisto",
		it: "Clauncher",
		es: "Clauncher",
		pt: "Clauncher"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			de: "Klammer",
			it: "Presa",
			es: "Agarre",
			pt: "Agarramento Compressor"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card