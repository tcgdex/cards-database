import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'es-mx': "Tynamo",
		'de-de': "Zapplardin",
		'it-it': "Tynamo",
		'pt-br': "Tynamo"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [602],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hold Still",
			'fr-fr': "Ne Bougez Pas",
			'es-es': "Permanecer Inmóvil",
			'es-mx': "Sin Moverse",
			'de-de': "Stillhalten",
			'it-it': "Immobile",
			'pt-br': "Ficar Parado"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	description: {
		'en-us': "While one alone doesn’t have much power, a chain of many Tynamo can be as powerful as lightning.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869670,
			tcgplayer: 675871
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870230,
			tcgplayer: 676899
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870229,
			tcgplayer: 677039
		}
	},
],
}

export default card
