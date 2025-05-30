import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Staravia",
		fr: "Étourvol",
		de: "Staravia",
		it: "Staravia",
		es: "Staravia",
		pt: "Staravia"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			de: "Flügelschlag",
			it: "Attacco d'Ala",
			es: "Ataque Ala",
			pt: "Ataque de Asa"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			de: "Tempohechtsprung",
			it: "Immersione Rapida",
			es: "Picado Rápido",
			pt: "Mergulho Veloz"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card