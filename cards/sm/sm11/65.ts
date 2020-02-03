import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-65",
	localId: 65,

	// Card informations
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 603,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/65/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/65/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/65/high.png",
		},
	},

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Overspark",
			fr: "Max’Étincelle",
		},
		text: {
			en: "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way.",
			fr: "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

