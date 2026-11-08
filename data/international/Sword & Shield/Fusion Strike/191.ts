import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [878],
	set: Set,

	name: {
		'en-us': "Cufant",
		'fr-fr': "Charibari",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",
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
	retreat: 3,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "If a job requires serious strength, this Pokémon will excel at it. Its copper body tarnishes in the rain, turning a vibrant green color."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'es-es': "Rodar",
			'pt-br': "Rolagem",
			'it-it': "Rotolamento"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "High Horsepower",
			'fr-fr': "Cavalerie Lourde",
			'de-de': "Pferdestärke",
			'es-es': "Fuerza Equina",
			'pt-br': "Potência Equina",
			'it-it': "Forza Equina"
		},

		damage: 80,

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582865,
				tcgplayer: 253345
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582865,
				tcgplayer: 253345
			}
		},
	],
}

export default card
