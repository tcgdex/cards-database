import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'pt-br': "Golpe de Colisão Aquecido",
			'de-de': "Hitze-Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
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
	illustrator: "MINAMINAMI Take",
	description: {
		'en-us': "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 715758,
				tcgplayer: 477182
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 715759,
				tcgplayer: 512036
			},
		}
	],
}

export default card
