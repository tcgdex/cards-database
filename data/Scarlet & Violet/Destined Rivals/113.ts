import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu",
		it: "Riolu",
		es: "Riolu",
		pt: "Riolu"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Punch",
			fr: "Koud'Poing",
			de: "Boxhieb",
			it: "Pugno",
			es: "Puño",
			pt: "Soco"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			de: "Waghalsiger Sturmangriff",
			it: "Carica Avventata",
			es: "Carga Descuidada",
			pt: "Carga Indomável"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card