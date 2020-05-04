import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-72",
	localId: 72,

	// Card informations
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/72/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wreck",
			fr: "Anéantissement",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 80 more damage. Then, discard that Stadium card.",
			fr: "S’il y a une carte Stade en jeu, cette attaque inflige 80 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
