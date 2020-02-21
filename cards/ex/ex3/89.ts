import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-89",
	localId: 89,

	// Card informations
	name: {
		en: "Ampharos ex",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/89/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 588,
		type: AbilityType.POKEBODY,
		name: {
			en: "Conductivity",
		},
		text: {
			en: "As long as Ampharos ex is in play, whenever your opponent attaches an Energy card to his or her Pokémon from hand, put 1 damage counter on that Pokémon. You can't put more than 1 damage counter even if there is more than 1 Ampharos ex in play.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigavolt",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
