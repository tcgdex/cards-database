import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [383],

	name: {
		en: "Groudon",
		fr: "Groudon",
		es: "Groudon",
		'es-mx': "Groudon",
		de: "Groudon",
		it: "Groudon",
		pt: "Groudon"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			'es-mx': "Martillar",
			de: "Einhämmern",
			it: "Martello",
			pt: "Martelada"
		},

		damage: 80
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			en: "Megaton Fall",
			fr: "Chute Mégatonne",
			es: "Caída Megatón",
			'es-mx': "Caída Megatón",
			de: "Megatonnenfall",
			it: "Caduta Megatonica",
			pt: "Queda do Megaton"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675920,
		cardmarket: 869719
	}
}

export default card