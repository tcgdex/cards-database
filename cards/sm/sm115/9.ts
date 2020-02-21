import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-9",
	localId: 9,

	// Card informations
	name: {
		en: "Charizard-GX",
		fr: "Dracaufeu-GX",
	},

	hp: 250,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/9/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 149,
		name: "aky CG Works"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		damage: 140
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flare Blitz-GX",
			fr: "Boutefeu-GX",
		},
		text: {
			en: "(You can't use more than 1 GX attack in a game.)",
			fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
