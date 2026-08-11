import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Hundred Furious Lashes",
				'fr-fr': "Multifouets Furieux",
			},
			effect: {
				'en-us': "Does 30 damage times the amount of Grass Energy attached to this Pokémon. This Pokémon can't use Hundred Furious Lashes during your next turn.",
				'fr-fr': "Inflige 30 dégâts multipliés par le nombre d'Énergies Grass attachées à ce Pokémon. Ce Pokémon ne peut pas utiliser Multifouets Furieux pendant votre prochain tour.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Drain",
				'fr-fr': "Méga-Sangsue",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 70,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Even if one of its arms is eaten, it's fine. The Pokémon regenerates quickly and will go right back to normal.",
	},

	thirdParty: {
		cardmarket: 280593,
		tcgplayer: 89755
	}
}

export default card
