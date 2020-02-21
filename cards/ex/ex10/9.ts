import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-9",
	localId: 9,

	// Card informations
	name: {
		en: "Meganium",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/9/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 65,
		type: AbilityType.POKEBODY,
		name: {
			en: "Healing Aroma",
		},
		text: {
			en: "As long as Meganium is your Active Pokémon, remove 1 damage counter from each Pokémon (excluding Pokémon-ex) (both yours and your opponent's) between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bouncy Move",
		},
		text: {
			en: "You may put up to 5 damage counters on Meganium. If you do, this attack does 50 damage plus 10 more damage for each damage counter you put on Meganium in this way.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
