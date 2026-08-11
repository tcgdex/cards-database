import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [19],

	name: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'es-es': "Rattata",
		'es-mx': "Rattata",
		'de-de': "Rattfratz",
		'it-it': "Rattata",
		'pt-br': "Rattata"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'es-es': "Derribo",
			'es-mx': "Derribo",
			'de-de': "Bodycheck",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684437,
				cardmarket: 877476
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684437,
				cardmarket: 877476
			}
		}
	],

}

export default card
