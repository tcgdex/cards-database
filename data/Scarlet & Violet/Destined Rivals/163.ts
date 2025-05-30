import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		de: "Mopex",
		it: "Cyclizar",
		es: "Cyclizar",
		pt: "Cyclizar"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			de: "Waghalsiger Sturmangriff",
			it: "Carica Avventata",
			es: "Carga Descuidada",
			pt: "Carga Indomável"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card