import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-42",
	localId: 42,

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/42/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/42/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/42/high.png",
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



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Deep Currents",
			fr: "Courants Profonds",
		},
		text: {
			en: "Shuffle 5 Water Energy cards from your discard pile into your deck.",
			fr: "Mélangez 5 cartes Énergie Water de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

