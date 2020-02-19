import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-40",
	localId: 40,

	// Card informations
	name: {
		en: "Roserade C",
		fr: "Roserade ",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/40/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/40/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/40/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 22,
		type: AbilityType.POKEBODY,
		name: {
			en: "Natural Cure",
			fr: "Remède naturel",
		},
		text: {
			en: "When you attach an Energy card from your hand to Roserade C, remove all Special Conditions from Roserade C.",
			fr: "Lorsque vous attachez une carte Énergie de votre main à Roserade , retirez-lui tous ses États Spéciaux.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magical Leaf",
			fr: "Feuillemagik",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage and remove 2 damage counters from Roserade C.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires tout en retirant 2 marqueurs de dégât à Roserade .",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

