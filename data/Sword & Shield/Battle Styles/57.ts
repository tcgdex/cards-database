import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Self-Destruct",
			fr: "Destruction",
			es: "Autodestrucción",
			it: "Autodistruzione",
			pt: "Autodestruição",
			de: "Finale"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep."
	},

	thirdParty: {
		cardmarket: 545396
	}
}

export default card
