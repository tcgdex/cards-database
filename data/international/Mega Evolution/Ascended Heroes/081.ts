import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'es-mx': "Togetic",
		'de-de': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic"
	},

	evolveFrom: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'es-mx': "Togepi",
		'de-de': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [176],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Draining Kiss",
			'fr-fr': "Vampibaiser",
			'es-es': "Beso Drenaje",
			'es-mx': "Beso Drenador",
			'de-de': "Diebeskuss",
			'it-it': "Assorbibacio",
			'pt-br': "Beijo Drenante"
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
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "They say that it will appear before kindhearted, caring people and shower them with happiness.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869692,
			tcgplayer: 675893
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870262,
			tcgplayer: 676915
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870261,
			tcgplayer: 677055
		}
	},
],
}

export default card
