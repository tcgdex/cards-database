import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [112],
	set: Set,

	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Horn Drill",
			'fr-fr': "Empal'Korne",
			'es-es': "Perforador",
			'it-it': "Perforcorno",
			'pt-br': "Chifre Broca",
			'de-de': "Hornbohrer"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'es-es': "Derribo",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar",
			'de-de': "Bodycheck"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674103,
				tcgplayer: 283978
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674103,
				tcgplayer: 283978
			}
		},
	],
}

export default card
