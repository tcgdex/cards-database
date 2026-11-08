import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'de-de': "Toxiquak",
		'it-it': "Toxicroak",
		'es-es': "Toxicroak",
		'pt-br': "Toxicroak",
		'es-mx': "Toxicroak"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'de-de': "Glibunkel",
		'it-it': "Croagunk",
		'es-es': "Croagunk",
		'pt-br': "Croagunk",
		'es-mx': "Croagunk"
	},
	stage: "Stage1",
	dexId: [454],

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'es-es': "Carga Descuidada",
			'pt-br': "Carga Indomável",
			'es-mx': "Carga Temeraria"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 20 puntos de daño a sí mismo."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851150,
				tcgplayer: 654418
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851150,
				tcgplayer: 654418
			}
		},
	],
}

export default card
