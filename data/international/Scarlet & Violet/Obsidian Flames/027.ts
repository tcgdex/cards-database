import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		'fr-fr': "Reptincel",
		'en-us': "Charmeleon",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Salamèche",
		'en-us': "Charmander",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'fr-fr': "Charge Énergétique",
			'en-us': "Heat Tackle",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'pt-br': "Golpe de Colisão Aquecido",
			'de-de': "Hitze-Tackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'en-us': "This Pokémon also does 20 damage to itself.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 727117,
				tcgplayer: 509708,
				cardtrader: 255587
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725107
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725107,
				tcgplayer: 509708,
				cardtrader: 255587
			}
		},
	],

	illustrator: "Ryota Murayama",

	
}

export default card
