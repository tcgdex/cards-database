import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'es-mx': "Pancham",
		'de-de': "Pam-Pam",
		'it-it': "Pancham",
		'pt-br': "Pancham"
	},

	illustrator: "Minato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [674],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'es-mx': "Carga Temeraria",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável"
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

		damage: 20
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It does its level best to glare and pull a scary face, but it can’t help grinning if anyone pats its head.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869726,
			tcgplayer: 675927
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870318,
			tcgplayer: 676943
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870317,
			tcgplayer: 677083
		}
	},
],
}

export default card
