import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Lt. Surge's Raticate",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/51/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Super Fang",
		},
		text: {
			en: "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10).",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
