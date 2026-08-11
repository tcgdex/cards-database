import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'es-es': "Darumaka",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'de-de': "Flampion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'pt-br': "Força",
			'de-de': "Stärke"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Fire Tackle",
			'fr-fr': "Charge de Feu",
			'es-es': "Placaje Fuego",
			'it-it': "Fuocazione",
			'pt-br': "Investida de Fogo",
			'de-de': "Feuertackle"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It derives its power from fire burning inside its body. If the fire dwindles, this Pokémon will immediately fall asleep.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769208,
				tcgplayer: 550078
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769208,
				tcgplayer: 550078
			}
		},
	],

	illustrator: "osare",

}

export default card