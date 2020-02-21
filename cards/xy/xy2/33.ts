import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-33",
	localId: 33,

	// Card informations
	name: {
		en: "Luxio",
		fr: "Luxio",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 404,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/33/high",
		},
	},

	evolveFrom: {
		en: "Shinx",
		fr: "Lixy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electricounter",
			fr: "Contre-Élek",
		},
		text: {
			en: "This attack does 40 damage times the number of Prize cards your opponent has taken.",
			fr: "Cette attaque inflige 40 dégâts multipliés par le nombre de cartes Récompense que votre adversaire a récupérées.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
