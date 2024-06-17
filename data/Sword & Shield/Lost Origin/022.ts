import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo",
		de: "Magcargo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Lost Volcano",
			fr: "Volcan Perdu",
			es: "Volcán Perdido",
			it: "Vulcano Perduto",
			pt: "Vulcão Perdido",
			de: "Nirgendwo-Vulkan"
		},

		effect: {
			en: "Put all Energy attached to this Pokémon in the Lost Zone.",
			fr: "Placez toutes les Énergies attachées à ce Pokémon dans la Zone Perdue.",
			es: "Pon todas las Energías unidas a este Pokémon en la Zona Perdida.",
			it: "Prendi tutte le Energie assegnate a questo Pokémon e mettile nell'area perduta.",
			pt: "Coloque todas as Energias ligadas a este Pokémon na Zona Perdida.",
			de: "Lege alle an dieses Pokémon angelegten Energien ins Nirgendwo."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card
