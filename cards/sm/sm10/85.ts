import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-85",
	localId: 85,

	// Card informations
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/85/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/85/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 455,
		type: AbilityType.TALENT,
		name: {
			en: "Underground Work",
			fr: "Travail Souterrain",
		},
		text: {
			en: "If you discard this Pokémon with the effect of Giovanni's Exile, discard the top card of your opponent's deck.",
			fr: "Si vous défaussez ce Pokémon du fait de l’effet d’Exil de Giovanni, défaussez la carte du dessus du deck de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
