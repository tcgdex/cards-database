import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-51",
	localId: 51,

	dexId: 211,

	// Card informations
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
	},

	hp: 90,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/51/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/51/low",
		}
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Poison Point",
			fr: "Point Poison",
		},
		text: {
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent’s attack (even if it is Knocked Out), the Attacking Pokémon is now Poisoned.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même s’il est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
		},
		text: {
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
