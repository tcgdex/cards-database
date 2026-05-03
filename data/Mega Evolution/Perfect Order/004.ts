import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [495],

	name: {
		en: "Snivy",
		fr: "Vipélierre",
		es: "Snivy",
		'es-mx': "Snivy",
		de: "Serpifeu",
		it: "Snivy",
		pt: "Snivy"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

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

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684400,
		cardmarket: 877416
	}
}

export default card
