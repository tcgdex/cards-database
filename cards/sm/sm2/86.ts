import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-86",
	localId: 86,

	// Card informations
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/86/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/86/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/86/high",
		},
	},

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Energy Link",
			fr: "Chaîne d’Énergie",
		},
		text: {
			en: "Attach an Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
