import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Raging Punch",
			fr: "Coup de Poing Furieux",
			es: "Puño Furioso",
			it: "Furiapugno",
			pt: "Soco Feroz",
			de: "Wuthaken"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Scav",

	thirdParty: {
		cardmarket: 751583
	}
}

export default card