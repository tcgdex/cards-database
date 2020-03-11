import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-27",
	localId: 27,

	// Card informations
	name: {
		en: "Persian",
		fr: "Persian",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/27/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/27/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/27/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharpen Claws",
			fr: "Affûtage des griffes",
		},
		text: {
			en: "Flip 3 coins. For each heads, discard a card from your opponent's hand without looking.",
			fr: "Lancez 3 pièces. Pour chaque face, défaussez une carte de la main de votre adversaire sans la regarder.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sneaky Attack",
			fr: "Coup Bas",
		},
		text: {
			en: "If Persian has any Darkness Energy attached to it, this attack does 30 damage plus 30 more damage.",
			fr: "Si des cartes Énergie Darkness sont attachées à Persian, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
