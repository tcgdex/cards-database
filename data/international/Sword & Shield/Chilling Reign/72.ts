import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [857],
	set: Set,

	name: {
		'en-us': "Hattrem",
		'fr-fr': "Chapotus",
		'es-es': "Hattrem",
		'it-it': "Hattrem",
		'pt-br': "Hattrem",
		'de-de': "Brimano"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Hatenna",
		'fr-fr': "Bibichut",
		'es-es': "Hatenna",
		'it-it': "Hatenna",
		'pt-br': "Hatenna",
		'de-de': "Brimova"
	},

	attacks: [{
		name: {
			'en-us': "Spiral Drain",
			'fr-fr': "Spirale Épuisante",
			'es-es': "Drenaje Espiral",
			'it-it': "Assorbimento Spirale",
			'pt-br': "Dreno Espiral",
			'de-de': "Spiralsauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Using the braids on its head, it pummels foes to get them to quiet down. One blow from those braids would knock out a professional boxer."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567180,
				tcgplayer: 241733
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567180,
				tcgplayer: 241733
			}
		},
	],
}

export default card
