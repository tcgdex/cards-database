import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-154",
	localId: 154,

	// Card informations
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 685,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/154/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/154/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/154/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/154/high.png",
		},
	},

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Olfactory Enchantment",
			fr: "Enchantement Olfactif",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Sweet Panic",
			fr: "Douce Panique",
		},
		text: {
			en: "If your opponent's Active Pokémon isn't Confused, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n’est pas Confus, cette attaque ne fait rien.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

