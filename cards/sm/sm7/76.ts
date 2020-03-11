import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-76",
	localId: 76,

	// Card informations
	name: {
		en: "Meditite",
		fr: "Méditikka",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 307,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Bide",
			fr: "Patience",
		},
		text: {
			en: "Flip a coin. If heads, if this Pokémon would be Knocked Out by damage from an attack during your opponent's next turn, it is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Lancez une pièce. Si c’est face, et si ce Pokémon doit être mis K.O. par les dégâts d’une attaque pendant le prochain tour de votre adversaire, il n’est pas mis K.O., mais il n’a plus que 10 PV.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Kick",
			fr: "Koud’Pied",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
