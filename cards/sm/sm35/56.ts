import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-56",
	localId: 56,

	// Card informations
	name: {
		en: "Shining Rayquaza",
		fr: "Rayquaza Brillant",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/56/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/56/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Discard the top 2 cards of your deck.",
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Sky Judgment",
			fr: "Jugement Céleste",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
		},
		damage: 190
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
