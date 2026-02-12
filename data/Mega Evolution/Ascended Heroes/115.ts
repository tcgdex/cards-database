import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		'es-mx': "Pancham",
		de: "Pam-Pam",
		it: "Pancham",
		pt: "Pancham"
	},

	illustrator: "Minato",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			es: "Carga Descuidada",
			'es-mx': "Carga Temeraria",
			de: "Waghalsiger Sturmangriff",
			it: "Carica Avventata",
			pt: "Carga Indomável"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675927,
		cardmarket: 869726
	}
}

export default card