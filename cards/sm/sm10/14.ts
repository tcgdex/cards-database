import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-14",
	localId: 14,

	// Card informations
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 70,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/14/high",
		},
	},

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 136,
		name: "otumami"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Burning Venom",
			fr: "Venin Brûlant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
