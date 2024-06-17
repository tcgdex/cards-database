import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		fr: "Luxio",
		en: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Coup de Pied Ravageur",
			en: "Zap Kick",
			es: "Electropatada",
			it: "Dinamocalcio",
			pt: "Chute Zap",
			de: "Stromtritt"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Éclair Frontal",
			en: "Head Bolt",
			es: "Rayo de Cabeza",
			it: "Zuccalampo",
			pt: "Raio de Cabeça",
			de: "Kopf-Blitz"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card