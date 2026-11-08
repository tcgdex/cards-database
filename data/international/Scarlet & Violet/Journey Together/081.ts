import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'de-de': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'es-mx': "Pupitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'de-de': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'es-mx': "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'es-es': "Derribo",
			'de-de': "Bodycheck",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar",
			'es-mx': "Derribo"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 20 puntos de daño a sí mismo."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Scav",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817233,
				tcgplayer: 623508
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817233,
				tcgplayer: 623508
			}
		},
	],
}

export default card
