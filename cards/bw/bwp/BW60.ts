import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW60",
	localId: "BW60",

	// Card informations
	name: {
		en: "Keldeo",
		fr: "Keldeo",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 647,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW60/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW60/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW60/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW60/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swords Dance",
			fr: "Danse-Lames",
		},
		text: {
			en: "During your next turn, this Pokémon's Aqua Blade attack's base damage is 120.",
			fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Hydrolame de ce Pokémon sont de 120.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Blade",
			fr: "Hydrolame",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card

