import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-100",
	localId: 100,

	// Card informations
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 563,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/100/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/100/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/100/high.png",
		},
	},

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
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
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Spirit Juggling",
			fr: "Jeu d’Esprits",
		},
		text: {
			en: "Discard any number of your Benched Pokémon. This attack does 30 more damage for each Benched Pokémon you discarded in this way.",
			fr: "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

