import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Monkey Beatdown",
			fr: "Raclée Simiesque",
			es: "Golpe Macaco",
			it: "Batosta della Scimmia",
			pt: "Pancada Primata"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card