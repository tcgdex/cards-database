import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-90",
	localId: 90,

	// Card informations
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 623,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/90/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/90/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/90/high",
		},
	},

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Rock Tumble",
			fr: "Roule-Pierre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fist of Antiquity",
			fr: "Poing d’Antiquité",
		},
		text: {
			en: "If you have any Supporter cards in your discard pile, this attack does nothing.",
			fr: "Si vous avez une carte Supporter dans votre pile de défausse, cette attaque ne fait rien.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
