import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-21",
	localId: 21,

	// Card informations
	name: {
		en: "Bastiodon",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 411,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/21/high",
		},
	},

	evolveFrom: {
		en: "Shieldon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kazuyuki Kano",

	abilities: [{
		id: 528,
		type: AbilityType.POKEBODY,
		name: {
			en: "Protective Wall",
		},
		text: {
			en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Anger Revenge",
		},
		text: {
			en: "If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+40"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
