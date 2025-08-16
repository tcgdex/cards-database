import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		en: "A Pokémon that has long been admired for its beauty. It runs agilely as if on wings."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			de: "Feuerkrallen",
			es: "Garras de Fuego",
			pt: "Garras de Fogo",
			it: "Artigli Infuocati"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			de: "Hitze-Tackle",
			es: "Placaje Ardiente",
			pt: "Golpe de Colisão Aquecido",
			it: "Calorazione"
		},

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582167,
		tcgplayer: 253130
	}
}

export default card