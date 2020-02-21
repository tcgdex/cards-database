import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-96",
	localId: 96,

	// Card informations
	name: {
		en: "Zweilous",
		fr: "Diamat",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 634,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/96/high",
		},
	},

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Draw In",
			fr: "Aspiracartes",
		},
		text: {
			en: "Attach 2 Darkness Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez 2 cartes Énergie Darkness de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Headbutt",
			fr: "Dracoud'Boule",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
