import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-36",
	localId: 36,

	// Card informations
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 613,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/36/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/36/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/36/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sniffle",
			fr: "Reniflement",
		},
		text: {
			en: "During your next turn, this Pokémon's Belt attack's base damage is 40.",
			fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Taloche de ce Pokémon sont de 40.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Belt",
			fr: "Taloche",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
