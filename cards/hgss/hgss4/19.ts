import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-19",
	localId: 19,

	// Card informations
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/19/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/19/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/19/high",
		},
	},

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shizurow",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Dig",
			fr: "Tunnel",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Impact",
			fr: "Impact sablonneux",
		},
		text: {
			en: "Flip a coin for each Fighting Energy attached to Dugtrio. This attack does 50 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Fighting attachée à Triopikeur. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
