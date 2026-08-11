import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [929],
	set: Set,

	name: {
		'fr-fr': "Olivado",
		'en-us': "Dolliv",
		'es-es': "Dolliv",
		'it-it': "Dolliv",
		'pt-br': "Dolliv",
		'de-de': "Olivinio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Olivini",
		'en-us': "Smoliv",
		'es-es': "Smoliv",
		'it-it': "Smoliv",
		'pt-br': "Smoliv",
		'de-de': "Olini"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Vent Ensoleillé",
			'en-us': "Sunny Wind",
			'es-es': "Viento Soleado",
			'it-it': "Vento Solare",
			'pt-br': "Vento Ensolarado",
			'de-de': "Sonnige Brise"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
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
	regulationMark: "G",

	description: {
		'en-us': "Dolliv shares its tasty, fresh-scented oil with others. This species has coexisted with humans since times long gone.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725100,
				tcgplayer: 509757,
				cardtrader: 255580
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725100,
				tcgplayer: 509757,
				cardtrader: 255580
			}
		},
	],

	illustrator: "Mizue",

	
}

export default card
