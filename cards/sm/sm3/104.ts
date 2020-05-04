import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-104",
	localId: 104,

	// Card informations
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/104/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Calculate",
			fr: "Calcul",
		},
		text: {
			en: "Look at the top 6 cards of your deck and put them back in any order.",
			fr: "Regardez les 6 cartes du dessus de votre deck et replacez-les dans l’ordre de votre choix.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beam",
			fr: "Rayon",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
