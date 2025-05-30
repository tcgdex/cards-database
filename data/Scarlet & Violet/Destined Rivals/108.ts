import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff",
		it: "Primeape",
		es: "Primeape",
		pt: "Primeape"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Raging Punch",
			fr: "Coup de Poing Furieux",
			de: "Wuthaken",
			it: "Furiapugno",
			es: "Puño Furioso",
			pt: "Soco Feroz"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card