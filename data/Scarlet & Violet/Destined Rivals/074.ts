import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmi",
		fr: "Pohm",
		de: "Pamo",
		it: "Pawmi",
		es: "Pawmi",
		pt: "Pawmi"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			de: "Leichter Hieb",
			it: "Pugnetto",
			es: "Puño Ligero",
			pt: "Soco de Luz"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			de: "Stromtritt",
			it: "Dinamocalcio",
			es: "Electropatada",
			pt: "Chute Zap"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card