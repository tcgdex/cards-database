import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-23",
	localId: 23,

	// Card informations
	name: {
		en: "Rain Castform",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 79,
		name: "Jungo Suzuki"
	},

	abilities: [{
		id: 804,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Temperamental Weather",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Scattered Shower",
		},
		text: {
			en: "Shuffle your hand into your deck. Draw up to 5 cards.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainy Day Blues",
		},
		text: {
			en: "If Low Pressure System is in play, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
