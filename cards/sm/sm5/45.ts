import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-45",
	localId: 45,

	// Card informations
	name: {
		en: "Shinx",
		fr: "Lixy",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 403,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/45/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",

	abilities: [{
		id: 1026,
		type: AbilityType.TALENT,
		name: {
			en: "Evolutionary Advantage",
			fr: "Avantage Évolutif",
		},
		text: {
			en: "If you go second, this Pokémon can evolve during your first turn.",
			fr: "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 10
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
