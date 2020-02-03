import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-109",
	localId: 109,

	// Card informations
	name: {
		en: "Meditite",
		fr: "Méditikka",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 307,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/109/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/109/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/109/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/109/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 59,
		name: "Mina Nakai"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Spirited Headbutt",
			fr: "Coup d’Boule Emporté",
		},
		text: {
			en: "This Pokémon can't use Spirited Headbutt during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup d’Boule Emporté pendant votre prochain tour.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

