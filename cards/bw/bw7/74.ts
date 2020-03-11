import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-74",
	localId: 74,

	// Card informations
	name: {
		en: "Scolipede",
		fr: "Brutapode",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 545,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/74/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/74/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/74/high",
		},
	},

	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 280,
		type: AbilityType.TALENT,
		name: {
			en: "Poison Point",
			fr: "Point Poison",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
		},
		text: {
			en: "If the Defending Pokémon is Poisoned, this attack does 40 more damage.",
			fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
