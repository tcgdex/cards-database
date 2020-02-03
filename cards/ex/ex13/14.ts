import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-14",
	localId: 14,

	// Card informations
	name: {
		en: "Pidgeot δ",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/14/high.png",
		},
	},

	evolveFrom: {
		en: "Pidgeotto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 334,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Reserve",
		},
		text: {
			en: "As long as Pidgeot has any Holon Energy cards attached to it, each player's Pokémon (excluding Pokémon that has δ on its card) can't use any Poké-Powers.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Rotating Claws",
		},
		text: {
			en: "You may discard an Energy card attached to Pidgeot. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Pidgeot.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card

