import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [397],
	set: Set,

	name: {
		en: "Staravia",
		fr: "Étourvol",
		es: "Staravia",
		it: "Staravia",
		pt: "Staravia",
		de: "Staravia"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Starly"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			pt: "Ataque de Asa",
			de: "Flügelschlag"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			de: "Tempohechtsprung"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kantaro",

	thirdParty: {
		cardmarket: 702445
	}
}

export default card