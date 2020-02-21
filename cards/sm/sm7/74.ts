import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-74",
	localId: 74,

	// Card informations
	name: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 246,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/74/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/74/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leer",
			fr: "Groz’Yeux",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
