import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-40",
	localId: 40,

	// Card informations
	name: {
		en: "Wailord",
		fr: "Wailord",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/40/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/40/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/40/high.png",
		},
	},

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dwindling Wave",
			fr: "Vague Faiblissante",
		},
		text: {
			en: "This attack does 40 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

