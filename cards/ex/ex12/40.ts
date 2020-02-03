import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-40",
	localId: 40,

	// Card informations
	name: {
		en: "Misdreavus",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 200,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/40/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},

	abilities: [{
		id: 245,
		type: AbilityType.POKEBODY,
		name: {
			en: "Deep Sleep",
		},
		text: {
			en: "As long as Misdreavus is your Active Pokémon, each player flips 2 coins for his or her Pokémon that is Asleep between turns. If either coin is tails, that Pokémon is still Asleep.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Return Trance",
		},
		text: {
			en: "Return an Energy card attached to Misdreavus to your hand. The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Dream Eater",
		},
		text: {
			en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card

