import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		'fr-fr': "Salamèche",
		'en-us': "Charmander",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Charge Énergétique",
			'en-us': "Heat Tackle",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'pt-br': "Golpe de Colisão Aquecido",
			'de-de': "Hitze-Tackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'en-us': "This Pokémon also does 10 damage to itself.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725106,
				tcgplayer: 509703,
				cardtrader: 255586
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 727116
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725106,
				tcgplayer: 509703,
				cardtrader: 255586
			}
		},
	],

	illustrator: "DOM",

	
}

export default card
