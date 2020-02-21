import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-SL4",
	localId: "SL4",

	// Card informations
	name: {
		en: "Groudon",
		fr: "Groudon",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/SL4/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/SL4/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 93,
		name: "Yuri Umemura"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Volcano Stomp",
			fr: "Écrasement volcanique",
		},
		text: {
			en: "Flip a coin. If heads, discard the top 4 cards of your opponent's deck. If tails, discard the top 4 cards of your deck.",
			fr: "Lancez une pièce. Si c’est face, défaussez les 4 premières cartes du deck de votre adversaire. Si c’est pile, défaussez les 4 premières cartes de votre deck.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
