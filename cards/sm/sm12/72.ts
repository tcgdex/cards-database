import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-72",
	localId: 72,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/72/high",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "otumami",

	abilities: [{
		id: 1317,
		type: AbilityType.TALENT,
		name: {
			en: "Blinking Lights",
			fr: "Lumières Clignotantes",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may look at the top card of your opponent's deck.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez regarder la carte du dessus du deck de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Swirling Flow",
			fr: "Flot Tourbillon",
		},
		text: {
			en: "You may have your opponent shuffle their deck.",
			fr: "Vous pouvez demander à votre adversaire de mélanger son deck.",
		},
		damage: 50
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
