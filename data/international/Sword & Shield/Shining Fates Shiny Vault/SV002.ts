import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [723],
	set: Set,

	name: {
		'fr-fr': "Efflèche",
		'en-us': "Dartrix",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Brindibou",
		'en-us': "Rowlet"
	},

	attacks: [{
		name: {
			'fr-fr': "Tranch'Herbe",
			'en-us': "Razor Leaf",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "It throws one knifelike feather after another at its enemies, and each one precisely strikes a weak point. These feathers are known as blade quills."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539398,
				tcgplayer: 232344
			}
		},
	],
}

export default card
