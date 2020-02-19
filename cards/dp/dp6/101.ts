import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-101",
	localId: 101,

	// Card informations
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 237,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/101/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/101/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/101/high.png",
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
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Triple Kick",
			fr: "Triple pied",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gut Spin",
			fr: "Tour de tripes",
		},
		text: {
			en: "If Tyrogue is anywhere under Hitmontop, you may switch Hitmontop with 1 of your Benched Pokémon.",
			fr: "Si Debugant se trouve sous Kapoera, vous pouvez échanger Kapoera avec 1 des Pokémon de votre Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

