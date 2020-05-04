import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-136",
	localId: 136,

	// Card informations
	name: {
		en: "Togepi",
		fr: "Togepi",
	},

	hp: 50,

	type: [
		Type.FAIRY,
	],

	dexId: 175,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/136/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/136/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/136/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Daunt",
			fr: "Découragement",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
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
