import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-48",
	localId: 48,

	// Card informations
	name: {
		en: "Munna",
		fr: "Munna",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 517,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/48/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/48/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnosis",
			fr: "Hypnose",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Dream Eater",
			fr: "Dévorêve",
		},
		text: {
			en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
			fr: "Si le Pokémon Défenseur n’est pas Endormi, cette attaque ne fait rien.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
