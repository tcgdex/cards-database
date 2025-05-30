import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Maschiff",
		fr: "Grondogue",
		de: "Mobtiff",
		it: "Maschiff",
		es: "Maschiff",
		pt: "Maschiff"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			es: "Patada Trasera",
			pt: "Chute Traseiro"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			de: "Fänge der Dunkelheit",
			it: "Oscurizanna",
			es: "Colmillo de Oscuridad",
			pt: "Presa Sombria"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card