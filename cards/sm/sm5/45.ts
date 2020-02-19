import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm5/45/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/45/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/45/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},

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

