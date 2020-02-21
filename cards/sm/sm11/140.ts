import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-140",
	localId: 140,

	// Card informations
	name: {
		en: "Hoopa",
		fr: "Hoopa",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/140/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/140/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/140/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/140/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Evil Admonition",
			fr: "Réprimande Maléfique",
		},
		text: {
			en: "This attack does 20 more damage for each of your opponent's Pokémon that has an Ability.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de votre adversaire ayant un talent.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Shock",
			fr: "Choc Cérébral",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
