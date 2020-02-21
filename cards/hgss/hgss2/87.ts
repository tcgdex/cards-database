import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-87",
	localId: 87,

	// Card informations
	name: {
		en: "Steelix",
		fr: "Steelix",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/87/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/87/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/87/high",
		},
	},

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},

	abilities: [{
		id: 749,
		type: AbilityType.POKEBODY,
		name: {
			en: "Perfect Metal",
			fr: "Métal parfait",
		},
		text: {
			en: "Steelix can't be affected by any Special Conditions.",
			fr: "Steelix ne peut pas être affecté par les États Spéciaux.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Stream",
			fr: "Courant d'énergie",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Steelix.",
			fr: "Cherchez une carte Énergie dans votre pile de défausse et attachez-la à Steelix.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gaia Crush",
			fr: "Anéantissement de Gaïa",
		},
		text: {
			en: "You may discard any Stadium card in play.",
			fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
		},
		damage: 100
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

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
