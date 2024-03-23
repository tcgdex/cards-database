import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			it: "Dinamocalcio",
			pt: "Chute Zap"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			es: "Rayo de Cabeza",
			it: "Zuccalampo",
			pt: "Raio de Cabeça"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card