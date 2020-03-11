import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-24",
	localId: 24,

	// Card informations
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/24/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/24/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/24/high",
		},
	},

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 1192,
		type: AbilityType.TALENT,
		name: {
			en: "Downpour",
			fr: "Averse",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may discard a Water Energy card from your hand.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Riptide",
			fr: "Courant",
		},
		text: {
			en: "This attack does 20 more damage for each Water Energy card in your discard pile. Then, shuffle those cards into your deck.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie Water dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
