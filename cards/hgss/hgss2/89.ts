import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-89",
	localId: 89,

	// Card informations
	name: {
		en: "Ursaring",
		fr: "Ursaring",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 217,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/89/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/89/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/89/high",
		},
	},

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},

	abilities: [{
		id: 897,
		type: AbilityType.POKEBODY,
		name: {
			en: "Berserk",
			fr: "Fou-furieux",
		},
		text: {
			en: "If Ursaring has any damage counters on it, each of Ursaring's attacks does 60 more damage (before applying Weakness and Resistance).",
			fr: "Si Ursaring a des marqueurs de dégât, chacune de ses attaques inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer Arm",
			fr: "Marto-Poing",
		},
		text: {
			en: "Discard the top card from your opponent's deck.",
			fr: "Défaussez la première carte du dessus du deck de votre adversaire.",
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
			en: "Megaton Lariat",
			fr: "Lasso titanesque",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
