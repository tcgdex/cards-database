import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [723],

	name: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
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
		en: "Rowlet",
		fr: "Brindibou",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				es: "Hoja Afilada",
				it: "Foglielama",
				pt: "Folha Navalha",
				de: "Rasierblatt"
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
		en: "It throws one knifelike feather after another at its enemies, and each one precisely strikes a weak point. These feathers are known as blade quills."
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
