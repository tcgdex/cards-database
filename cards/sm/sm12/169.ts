import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-169",
	localId: 169,

	// Card informations
	name: {
		en: "Aipom",
		fr: "Capumain",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 190,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/169/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/169/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/169/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/169/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",

	abilities: [{
		id: 1385,
		type: AbilityType.TALENT,
		name: {
			en: "Scampering Tail",
			fr: "Queue Fuyante",
		},
		text: {
			en: "Once during your turn (before your attack), you may put the top card of your opponent's deck on the bottom of their deck without looking at it.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer la carte du dessus du deck de votre adversaire en dessous de son deck sans la regarder.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
