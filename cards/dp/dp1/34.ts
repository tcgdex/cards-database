import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/34/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/34/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/34/high",
		},
	},

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "See Beyond",
			fr: "Clairvoyant",
		},
		text: {
			en: "Choose a card from your hand and put it as a Prize card face up. Then, choose 1 of your face-down Prize cards without looking and put it into your hand. This attack does nothing if all of your Prize cards are face up.",
			fr: "Choisissez une carte de votre main et placez-la comme carte Récompense, face retournée. Choisissez alors 1 de vos cartes Récompense se trouvant face cachée et placez-la dans votre main. Cette attaque est sans effet si toutes vos cartes Récompense sont retournées.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extrasensory",
			fr: "Extrasenseur",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 30 damage plus 50 more damage.",
			fr: "Si vous avez le même nombre de cartes en main que votre adversaire, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
