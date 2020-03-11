import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-44",
	localId: 44,

	dexId: 99,

	// Card informations
	name: {
		en: "Kingler",
		fr: "Krabboss",
	},

	hp: 130,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/44/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/44/low",
		}
	},

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Heavy Pincers",
			fr: "Pinces Lourdes",
		},
		text: {
			en: "Discard the top card of your opponent’s deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Rend",
			fr: "Déchirure",
		},
		text: {
			en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
