import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-28",
	localId: 28,

	// Card informations
	name: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 726,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/28/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/28/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/28/high.png",
		},
	},

	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

