import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		it: "Pawmi",
		pt: "Pawmi",
		de: "Pamo"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			es: "Puño Ligero",
			it: "Pugnetto",
			pt: "Soco de Luz",
			de: "Leichter Hieb"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			it: "Dinamocalcio",
			pt: "Chute Zap",
			de: "Stromtritt"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card