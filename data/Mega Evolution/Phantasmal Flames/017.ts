import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Reshiram",
		fr: "Reshiram",
		es: "Reshiram",
		'es-mx': "Reshiram",
		de: "Reshiram",
		it: "Reshiram",
		pt: "Reshiram"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",
	dexId: [643],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			'es-mx': "Combustión",
			de: "Glühen",
			it: "Fuoco Continuo",
			pt: "Combustão"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			en: "Burning Flare",
			fr: "Flamboiement Brûlant",
			es: "Fulgor Ígneo",
			'es-mx': "Llama Ardiente",
			de: "Einäschernde Fackel",
			it: "Fiammata Ardente",
			pt: "Labareda Abrasadora"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 240
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	],

	thirdParty: {
		cardmarket: 857592
	}
}

export default card