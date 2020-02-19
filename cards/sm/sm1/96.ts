import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/96/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/96/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/96/high.png",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 188,
		name: "Hiroyuki Yamamoto"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Wave",
			fr: "Vague de Dragon",
		},
		text: {
			en: "Discard a Grass Energy and a Lightning Energy from this Pokémon.",
			fr: "Défaussez une Énergie Grass et une Énergie Lightning de ce Pokémon.",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Tail",
			fr: "Longue Queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

