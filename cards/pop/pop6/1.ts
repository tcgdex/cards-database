import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop6-1",
	localId: 1,

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
			en: "https://assets.tcgdex.net/en/pop/pop6/1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop6/1/high.png",
		},
	},

	evolveFrom: {
		en: "Shieldon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},

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



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 6",
		code: "pop6"
	}
}

export default card

