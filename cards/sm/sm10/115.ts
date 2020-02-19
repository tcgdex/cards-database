import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-115",
	localId: 115,

	// Card informations
	name: {
		en: "Krokorok",
		fr: "Escroco",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 552,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/115/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/115/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/115/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/115/high.png",
		},
	},

	evolveFrom: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Corner",
			fr: "Coinçage",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

