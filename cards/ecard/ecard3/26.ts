import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-26",
	localId: 26,

	// Card informations
	name: {
		en: "Poliwrath",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/26/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 1020,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Strange Spiral",
		},
		text: {
			en: "Once during your turn (before you attack), if Poliwrath if your Active Pokémon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokémon is now Confused. This power can't be used if Poliwrath is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Punch",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
