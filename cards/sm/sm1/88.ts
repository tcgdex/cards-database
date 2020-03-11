import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-88",
	localId: 88,

	// Card informations
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Anesaki Dynamic",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metallic Sound",
			fr: "Résonance Métallique",
		},
		text: {
			en: "Discard all Special Energy from each Pokémon.",
			fr: "Défaussez toute l’Énergie spéciale de chaque Pokémon.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerial Ace",
			fr: "Aéropique",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
