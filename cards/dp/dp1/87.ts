import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Magnemite",
		fr: "Magneti",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/87/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/87/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Metal Sound",
			fr: "Strido-son",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Resonance",
			fr: "Résonance",
		},
		text: {
			en: "If the Defending Pokémon is Confused, this attack does 20 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur est Confus, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
