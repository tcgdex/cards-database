import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-33",
	localId: 33,

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/33/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 143,
		name: "so-taro"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venting Anger",
			fr: "Évacuation de Colère",
		},
		text: {
			en: "This attack does 50 damage for each Magikarp in your discard pile.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Magicarpe dans votre pile de défausse.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Splash Burn",
			fr: "Éclaboussure Brûlante",
		},
		text: {
			en: "This attack does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
