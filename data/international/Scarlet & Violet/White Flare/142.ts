import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'de-de': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'es-es': "Zorua",
		'es-mx': "Zorua"
	},

	illustrator: "Naoki Saito",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'de-de': "Bodycheck",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar",
			'es-es': "Derribo",
			'es-mx': "Derribo"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836168,
				tcgplayer: 642255
			}
		},
	],
}

export default card
