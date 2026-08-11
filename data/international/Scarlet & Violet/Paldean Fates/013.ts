import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Heat Rotom",
		'fr-fr': "Motisma Chaleur",
		'es-es': "Rotom Calor",
		'it-it': "Rotom Calore",
		'pt-br': "Rotom Calor",
		'de-de': "Hitze-Rotom"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'pt-br': "Golpe de Colisão Aquecido",
			'de-de': "Hitze-Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 40 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 40 dégâts.",
			'es-es': "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 40 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751539,
				tcgplayer: 534154,
				cardtrader: 274197
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751539,
				tcgplayer: 534154,
				cardtrader: 274197
			}
		},
	],

	illustrator: "Scav",

	description: {
		'en-us': "If the convection microwave oven is not working properly, then the Rotom inhabiting it will become lethargic.",
	},

}

export default card
