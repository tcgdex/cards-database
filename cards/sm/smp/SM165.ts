import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM165",
	localId: "SM165",

	// Card informations
	name: {
		en: "Ultra Necrozma",
		fr: "Ultra-Necrozma",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM165/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM165/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM165/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM165/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Shining Burst",
			fr: "Brillance Détonante",
		},
		text: {
			en: "If the total of both players' remaining Prize cards is 6 or less, discard all Energy from this Pokémon, and this attack does 100 more damage.",
			fr: "S’il reste 6 cartes Récompense ou moins aux deux joueurs réunis, défaussez toute l’Énergie de ce Pokémon et cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
