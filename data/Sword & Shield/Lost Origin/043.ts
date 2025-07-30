import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [460],
	set: Set,

	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Icicle Punch",
			fr: "Poing Stalactite",
			es: "Puñetazo Gélido",
			it: "Freddopugno",
			pt: "Soco de Icelo",
			de: "Eiswatsche"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			es: "Doble Filo",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes",
			de: "Risikotackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674053
	}
}

export default card