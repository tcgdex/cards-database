import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-132",
	localId: 132,

	// Card informations
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 335,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/132/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/132/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/132/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/132/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Head Hunt",
			fr: "Chasseur de Têtes",
		},
		text: {
			en: "Look at the top 6 cards of your deck, reveal any number of Pokémon you find there, and put them into your hand. Discard the other cards.",
			fr: "Regardez les 6 cartes du dessus de votre deck, montrez autant de Pokémon trouvés que vous voulez, puis ajoutez-les à votre main. Défaussez les autres cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
