import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-116",
	localId: 116,

	// Card informations
	name: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 536,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/116/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/116/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/116/high.png",
		},
	},

	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
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
			Type.FIGHTING
		],
		name: {
			en: "Mini Earthquake",
			fr: "Mini Séisme",
		},
		text: {
			en: "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

