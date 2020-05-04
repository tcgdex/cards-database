import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-53",
	localId: 53,

	// Card informations
	name: {
		en: "Vibrava",
		fr: "Vibraninf Niv. 36",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/53/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/53/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/53/high",
		},
	},

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Typhoon",
			fr: "Énergy typhon",
		},
		text: {
			en: "Does 20 damage times the number of Energy cards in your opponent's discard pile. Then, put those Energy cards on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
			fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie dans la pile de défausse de votre adversaire. Ensuite, placez ces cartes Énergie au dessus du deck de votre adversaire. Celui-ci mélange ensuite son deck.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
