import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-2",
	localId: 2,

	// Card informations
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/2/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/2/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/2/high",
		},
	},

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hard Crush",
			fr: "Écras'dur",
		},
		text: {
			en: "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded.",
			fr: "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mantle Bazooka",
			fr: "Bazoocape",
		},
		text: {
			en: "Discard 2 Fire Energy attached to Magmortar.",
			fr: "Défaussez 2 cartes Énergie Fire attachées à Maganon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
