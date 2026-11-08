import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'es-mx': "Lombre",
		'de-de': "Lombrero",
		'it-it': "Lombre",
		'pt-br': "Lombre"
	},

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'es-mx': "Lotad",
		'de-de': "Loturzel",
		'it-it': "Lotad",
		'pt-br': "Lotad",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [271],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Mega Drain",
			'fr-fr': "Méga-Sangsue",
			'es-es': "Megaagotar",
			'es-mx': "Megadrenado",
			'de-de': "Megasauger",
			'it-it': "Megassorbimento",
			'pt-br': "Megadreno"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It prefers waterfronts with plentiful food. It became nocturnal so it wouldn't have to compete for food with bird Pokémon.",
	},

	illustrator: "Shigenori Negishi",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857581,
				tcgplayer: 662177,
				cardtrader: 356790
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857581,
				tcgplayer: 662177,
				cardtrader: 356790
			}
		},
	],
}

export default card
