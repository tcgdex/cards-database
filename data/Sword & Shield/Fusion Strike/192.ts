import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
		es: "Copperajah",
		it: "Copperajah",
		pt: "Copperajah",
		de: "Patinaraja"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		en: "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder."
	},

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			de: "Stärke",
			es: "Fuerza",
			pt: "Força",
			it: "Forza"
		},

		damage: 90
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "High Horsepower",
			fr: "Cavalerie Lourde",
			de: "Pferdestärke",
			es: "Fuerza Equina",
			pt: "Potência Equina",
			it: "Forza Equina"
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
		cardmarket: 582866,
		tcgplayer: 253347
	}
}

export default card