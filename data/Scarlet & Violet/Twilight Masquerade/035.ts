import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			pt: "Golpe de Colisão Rolante",
			de: "Rolltackle"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Inferno Onrush",
			fr: "Torrent d'Enfer",
			es: "Infierno Desatado",
			it: "Assalto Infernale",
			pt: "Investida Infernal",
			de: "Inferno-Ansturm"
		},

		effect: {
			en: "This Pokémon also does 70 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 70 dégâts.",
			es: "Este Pokémon también se hace 70 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 70 danni a se stesso.",
			pt: "Este Pokémon também causa 70 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu."
		},

		damage: 210
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "OKUBO",

	thirdParty: {
		cardmarket: 769209
	}
}

export default card