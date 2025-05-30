import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Flamigo",
		fr: "Flamenroule",
		de: "Flaminkno",
		it: "Flamigo",
		es: "Flamigo",
		pt: "Flamigo"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flap",
			fr: "Battement",
			de: "Flattern",
			it: "Alabattito",
			es: "Aleteo",
			pt: "Asa"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Nosedive",
			fr: "Descente en Piqué",
			de: "Sturzflugangriff",
			it: "Rapidiscesa",
			es: "Ataque en Picado",
			pt: "Mergulhar de Bico"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card