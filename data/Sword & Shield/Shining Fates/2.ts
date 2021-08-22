import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Yanmega",
		en: "Yanmega",
		es: "Yanmega",
		it: "Yanmega",
		pt: "Yanmega",
		de: "Yanmega"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		fr: "Yanma",
		en: "Yanma"
	},

	attacks: [{
		name: {
			fr: "Piqûre",
			en: "Bug Bite",
			es: "Picadura",
			it: "Coleomorso",
			pt: "Picada",
			de: "Käferbiss"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			fr: "Descente en Piqué",
			en: "Nosedive",
			es: "Ataque en Picado",
			it: "Rapidiscesa",
			pt: "Mergulhar de Bico",
			de: "Sturzflugangriff"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	regulationMark: "E",
	retreat: 0,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced."
	}
}

export default card
