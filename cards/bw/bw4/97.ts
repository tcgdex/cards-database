import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-97",
	localId: 97,

	// Card informations
	name: {
		en: "Zekrom-EX",
		fr: "Zekrom-EX",
	},

	hp: 180,

	type: [
		Type.LIGHTNING,
	],

	dexId: 644,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/97/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/97/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Glinting Claw",
			fr: "Griffe Scintillante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong Volt",
			fr: "Décharge Foudroyante",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon.",
			fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
