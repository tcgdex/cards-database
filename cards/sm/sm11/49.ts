import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-49",
	localId: 49,

	// Card informations
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 752,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/49/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/49/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/49/high",
		},
	},

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tangle Drag",
			fr: "Lasso Piège",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sticky Web",
			fr: "Toile Gluante",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus et son Coût de Retraite augmente de Colorless.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
