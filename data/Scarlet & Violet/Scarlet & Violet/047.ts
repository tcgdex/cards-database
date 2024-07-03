import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Buizel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			pt: "Jato d'Água",
			de: "Hydropumpe"
		},

		effect: {
			en: "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card