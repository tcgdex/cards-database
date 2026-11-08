import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'de-de': "Krebscorps",
		'it-it': "Corphish",
		'es-es': "Corphish",
		'pt-br': "Corphish",
		'es-mx': "Corphish"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [341],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'de-de': "Klammer",
			'it-it': "Presa",
			'es-es': "Agarre",
			'pt-br': "Agarramento Compressor",
			'es-mx': "Fuerza de Garra"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'de-de': "Bodycheck",
			'it-it': "Riduttore",
			'es-es': "Derribo",
			'pt-br': "Desmantelar",
			'es-mx': "Derribo"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851104,
				tcgplayer: 654372
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851104,
				tcgplayer: 654372
			}
		},
	],
}

export default card
