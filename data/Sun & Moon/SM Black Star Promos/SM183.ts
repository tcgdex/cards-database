import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Thunder Jolt",
			fr: "Secousse Tonnerre",
			es: "Sacudida Atronadora",
			it: "Scoppiotuono",
			pt: "Choque do Trovão",
			de: "Donnerrüttler"
		},

		damage: 40,

		effect: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s’inflige 20 dégâts.",
			es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge 20 danni a se stesso.",
			pt: "Este Pokémon causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
		},

		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 1
}

export default card