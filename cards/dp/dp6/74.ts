import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-74",
	localId: 74,

	// Card informations
	name: {
		en: "Tauros",
		fr: "Tauros",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 128,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/74/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/74/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Herd Charge",
			fr: "Charge de troupeau",
		},
		text: {
			en: "Flip a coin for each Tauros you have in play. This attack does 20 damage times the number of heads.",
			fr: "Lancez une pièce pour chaque Tauros que vous avez en jeu. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thrash",
			fr: "Mania",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, Tauros does 10 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si c'est pile, Tauros s'inflige 10 dégâts.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
