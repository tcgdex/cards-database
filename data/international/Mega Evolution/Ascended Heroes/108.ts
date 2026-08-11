import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'es-es': "Groudon",
		'es-mx': "Groudon",
		'de-de': "Groudon",
		'it-it': "Groudon",
		'pt-br': "Groudon"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [383],
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'es-mx': "Martillar",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'pt-br': "Martelada"
		},

		damage: 80
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Megaton Fall",
			'fr-fr': "Chute Mégatonne",
			'es-es': "Caída Megatón",
			'es-mx': "Caída Megatón",
			'de-de': "Megatonnenfall",
			'it-it': "Caduta Megatonica",
			'pt-br': "Queda do Megaton"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	description: {
		'en-us': "Said to have expanded the lands by evaporating water with raging heat. It battled titanically with Kyogre.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869719,
			tcgplayer: 675920
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870310,
			tcgplayer: 676939
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870309,
			tcgplayer: 677079
		}
	},
],
}

export default card
