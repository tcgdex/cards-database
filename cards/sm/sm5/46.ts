import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-46",
	localId: 46,

	// Card informations
	name: {
		en: "Shinx",
		fr: "Lixy",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 403,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/46/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/46/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
			en: "Charge",
			fr: "Chargeur",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
