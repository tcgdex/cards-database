import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [44],
	set: Set,

	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'pt-br': "Oddish",
		'de-de': "Myrapla"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Absorb",
			'fr-fr': "Vole-Vie",
			'es-es': "Absorber",
			'it-it': "Assorbimento",
			'pt-br': "Absorção",
			'de-de': "Absorber"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674014,
				tcgplayer: 283862
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674014,
				tcgplayer: 283862
			}
		},
	],
}

export default card
