import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			es: "Disparo Lodo",
			it: "Colpodifango",
			pt: "Tiro de Lama"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			es: "Placaje Salvaje",
			it: "Azionferoce",
			pt: "Investida Feroz"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card