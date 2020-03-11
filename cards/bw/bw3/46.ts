import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-46",
	localId: 46,

	// Card informations
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 563,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/46/high",
		},
	},

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Damagriiigus",
			fr: "Tutankarnage",
		},
		text: {
			en: "Move all damage counters from 1 of your Benched Pokémon to the Defending Pokémon.",
			fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon de Banc vers le Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Perplex",
			fr: "Affolement",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
