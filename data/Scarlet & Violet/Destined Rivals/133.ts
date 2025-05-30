import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Scrafty",
		fr: "Baggaïd de Rosemary",
		de: "Marys Irokex",
		it: "Scrafty di Mary",
		es: "Scrafty de Roxy",
		pt: "Scrafty da Marine"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			es: "Patada Trasera",
			pt: "Chute Traseiro"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			de: "Wilder Tackle",
			it: "Azionferoce",
			es: "Placaje Salvaje",
			pt: "Investida Feroz"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card