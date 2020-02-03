import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-47",
	localId: 47,

	// Card informations
	name: {
		en: "Rapidash 4",
		fr: "Galopa  Niv. 53",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/47/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/47/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/47/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {
			en: "Pickup Power",
			fr: "Pouvoir ramassage",
		},
		text: {
			en: "Flip 3 coins. For each heads, search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand.",
			fr: "Lancez 3 pièces. Pour chaque face, choisissez dans votre pile de défausse une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Mane",
			fr: "Crinière de feu",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

