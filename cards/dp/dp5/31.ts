import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-31",
	localId: 31,

	// Card informations
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/31/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/31/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/31/high",
		},
	},

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Paralyze Poison",
			fr: "Poison paralysant",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
