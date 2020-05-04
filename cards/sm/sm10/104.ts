import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-104",
	localId: 104,

	// Card informations
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 739,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knuckle Blast",
			fr: "Explosion de Poings",
		},
		text: {
			en: "If you have more Prize cards remaining than your opponent, this attack does 60 more damage.",
			fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
