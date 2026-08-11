import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
		'es-es': "Reshiram",
		'es-mx': "Reshiram",
		'de-de': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram"
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [643],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'es-mx': "Combustión",
			'de-de': "Glühen",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			'en-us': "Burning Flare",
			'fr-fr': "Flamboiement Brûlant",
			'es-es': "Fulgor Ígneo",
			'es-mx': "Llama Ardiente",
			'de-de': "Einäschernde Fackel",
			'it-it': "Fiammata Ardente",
			'pt-br': "Labareda Abrasadora"
		},

		effect: {
			'en-us': "This Pokémon also does 60 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "According to myth, if people ignore truth and let themselves become consumed by greed, Reshiram will arrive to burn their kingdoms down.",
	},

	illustrator: "AKIRA EGAWA",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 857592,
				tcgplayer: 662219,
				cardtrader: 356800
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857592,
				tcgplayer: 662219,
				cardtrader: 356800
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 858504
			}
		},
	],
}

export default card
