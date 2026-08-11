import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [928],
	set: Set,

	name: {
		'fr-fr': "Olivini",
		'en-us': "Smoliv",
		'es-es': "Smoliv",
		'it-it': "Smoliv",
		'pt-br': "Smoliv",
		'de-de': "Olini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Vole-Vie",
			'en-us': "Absorb",
			'es-es': "Absorber",
			'it-it': "Assorbimento",
			'pt-br': "Absorção",
			'de-de': "Absorber"
		},

		effect: {
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'en-us': "Heal 10 damage from this Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725099,
				tcgplayer: 509754,
				cardtrader: 255579
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725099,
				tcgplayer: 509754,
				cardtrader: 255579
			}
		},
	],

	illustrator: "Masako Tomii",

	
}

export default card
