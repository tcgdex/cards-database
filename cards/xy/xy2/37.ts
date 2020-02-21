import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-37",
	localId: 37,

	// Card informations
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 695,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/37/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/37/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/37/high",
		},
	},

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Parabolic Charge",
			fr: "Parabocharge",
		},
		text: {
			en: "Search your deck for up to 2 Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 cartes Énergie dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
