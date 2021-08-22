import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Rocky Tackle",
			fr: "Tacle Rocailleux",
			es: "Placaje Rocoso",
			it: "Azione Rocciosa",
			pt: "Investida Pedregosa",
			de: "Steiniger Tackle"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 170,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body."
	}
}

export default card