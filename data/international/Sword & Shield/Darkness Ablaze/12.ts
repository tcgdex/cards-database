import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [723],

	name: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
		'de-de': "Bauz"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Navalha",
				'de-de': "Rasierblatt"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It throws one knifelike feather after another at its enemies, and each one precisely strikes a weak point. These feathers are known as blade quills."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482934,
				tcgplayer: 219092
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482934,
				tcgplayer: 219092
			}
		},
	],
}

export default card
