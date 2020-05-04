import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-80",
	localId: 80,

	// Card informations
	name: {
		en: "Regirock",
		fr: "Regirock",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/80/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/80/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Enhanced Stomp",
			fr: "Piétinement Amélioré",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 20 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hammer Arm",
			fr: "Marto-Poing",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
