import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-121",
	localId: 121,

	// Card informations
	name: {
		en: "Spoink",
		fr: "Spoink",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 325,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/121/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/121/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psybeam",
			fr: "Rafale psy",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bounce",
			fr: "Faire des bonds",
		},
		text: {
			en: "You may switch Spoink with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Spoink avec 1 des Pokémon de votre Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
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
