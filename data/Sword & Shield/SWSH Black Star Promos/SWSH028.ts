import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon",
		fr: "Duralugon",
		es: "Duraludon",
		pt: "Duraludon",
		de: "Duraludon",
		it: "Duraludon"
	},

	illustrator: "Ryuta Fuse",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			pt: "Garra de Metal",
			de: "Metallklaue",
			it: "Ferrartigli"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Steel Beam",
			fr: "Métalaser",
			es: "Metaláser",
			pt: "Feixe de Aço",
			de: "Stahlstrahl",
			it: "Raggio d'Acciaio"
		},

		effect: {
			en: "This Pokémon also does 40 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 40 dégâts.",
			es: "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 40 danni a se stesso."
		},

		damage: 150,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,

	description: {
		en: "Its body resembles polished metal, and it's both lightweight and strong. The only drawback is that it rusts easily."
	},

	stage: "Basic",
	dexId: [884],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 453308
	}
}

export default card
