import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'pt-br': "Arcanine",
		'de-de': "Arkani"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		'en-us': "A Pokémon that has long been admired for its beauty. It runs agilely as if on wings."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fire Claws",
			'fr-fr': "Griffes Enflammées",
			'de-de': "Feuerkrallen",
			'es-es': "Garras de Fuego",
			'pt-br': "Garras de Fogo",
			'it-it': "Artigli Infuocati"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'de-de': "Hitze-Tackle",
			'es-es': "Placaje Ardiente",
			'pt-br': "Golpe de Colisão Aquecido",
			'it-it': "Calorazione"
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
				cardmarket: 582167,
				tcgplayer: 253130
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582167,
				tcgplayer: 253130
			}
		},
	],
}

export default card
