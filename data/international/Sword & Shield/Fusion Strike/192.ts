import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		'en-us': "Copperajah",
		'fr-fr': "Pachyradjah",
		'es-es': "Copperajah",
		'it-it': "Copperajah",
		'pt-br': "Copperajah",
		'de-de': "Patinaraja"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Cufant",
		'fr-fr': "Charibari",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "KEIICHIRO ITO",

	description: {
		'en-us': "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder."
	},

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'de-de': "Stärke",
			'es-es': "Fuerza",
			'pt-br': "Força",
			'it-it': "Forza"
		},

		damage: 90
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "High Horsepower",
			'fr-fr': "Cavalerie Lourde",
			'de-de': "Pferdestärke",
			'es-es': "Fuerza Equina",
			'pt-br': "Potência Equina",
			'it-it': "Forza Equina"
		},

		damage: 160,

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582866,
				tcgplayer: 253347
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582866,
				tcgplayer: 253347
			}
		},
	],
}

export default card
