import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-29",
	localId: 29,

	// Card informations
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/29/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/29/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/29/high",
		},
	},

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},

	abilities: [{
		id: 1133,
		type: AbilityType.TALENT,
		name: {
			en: "Surrender Now",
		},
		text: {
			en: "Once during your turn, if this Pokémon is discarded with the effect of Jessie & James, you may have your opponent discard a card from their hand. (They discard that card after the effect of Jessie & James.)",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Rendez-Vous Tous",
		},
		text: {
			fr: "Une seule fois pendant votre tour, si ce Pokémon est défaussé du fait de l’effet de la carte Jessie et James, vous pouvez demander à votre adversaire de défausser une carte de sa main. (Cette carte est défaussée après l’effet de Jessie et James.)",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Charge",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
