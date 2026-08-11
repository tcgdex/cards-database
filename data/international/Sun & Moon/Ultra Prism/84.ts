import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
		'es-es': "Shieldon",
		'it-it': "Shieldon",
		'pt-br': "Shieldon",
		'de-de': "Schilterus"
	},

	illustrator: "so-taro",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		410,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Confront",
				'fr-fr': "Confrontation",
				'es-es': "Confrontar",
				'it-it': "Confronto",
				'pt-br': "Confrontar",
				'de-de': "Konfrontieren"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon lived in primeval jungles. Few enemies would have been willing to square off against its heavily armored face, so it's thought.",
	},

	thirdParty: {
		cardmarket: 316011,
		tcgplayer: 157701
	}
}

export default card
