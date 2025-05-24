import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Yuya Oka",
	category: "Pokemon",

	description: {
		en: "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it."
	},

	stage: "Basic",

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		de: "Relaxo",
		es: "Snorlax",
		pt: "Snorlax",
		it: "Snorlax"
	},

	rarity: "None",
	dexId: [143],
	hp: 140,
	types: ["Colorless"],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slap Push",
			fr: "Grande Claque",
			de: "Stoß",
			es: "Empujón con Bofetón",
			pt: "Tapa Empurrão",
			it: "Spintonata"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Single Strike Tackle",
			fr: "Charge Poing Final",
			de: "Fokussierter-Angriff-Tackle",
			es: "Placaje Golpe Brusco",
			pt: "Investida Golpe Decisivo",
			it: "Azione Colpo Singolo"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
