import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Rillaboom",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/14/high.png",
		},
	},

	evolveFrom: {
		en: "Thwackey",
	},

	tags: [
		Tag.STAGE2,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Voltage Beat",
		},
		text: {
			en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

