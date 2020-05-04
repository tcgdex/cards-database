import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-79",
	localId: 79,

	// Card informations
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/79/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/79/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/79/high",
		},
	},

	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {
			en: "Gold Rush",
			fr: "Ruée Vers l’Or",
		},
		text: {
			en: "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way.",
			fr: "Défaussez autant de cartes Énergie Metal que vous voulez de votre main. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
