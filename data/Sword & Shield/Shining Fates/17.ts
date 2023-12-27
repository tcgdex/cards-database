import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Reshiram",
		en: "Reshiram",
		es: "Reshiram",
		it: "Reshiram",
		pt: "Reshiram",
		de: "Reshiram"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Amazing Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Brasier Magnifique",
			en: "Amazing Blaze",
			es: "Llamarada Increíble",
			it: "Fiamma Policroma",
			pt: "Incêndio Incrível",
			de: "Atemberaubende Feuersbrunst"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			en: "This Pokémon also does 60 damage to itself.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 270,
		cost: ["Fire", "Lightning", "Darkness"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When Reshiram's tail flares, the heat energy moves the atmosphere and changes the world's weather."
	}
}

export default card
