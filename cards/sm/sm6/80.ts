import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-80",
	localId: 80,

	// Card informations
	name: {
		en: "Guzzlord",
		fr: "Engloutyran",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 799,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/80/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/80/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Lord's Valley",
			fr: "Vallée du Tyran",
		},
		text: {
			en: "If you have exactly 2, 4, or 6 Prize cards remaining, discard the top 10 cards of your deck.",
			fr: "S’il vous reste exactement 2, 4 ou 6 cartes Récompense, défaussez les 10 cartes du dessus de votre deck.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
