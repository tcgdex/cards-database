import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-30",
	localId: 30,

	// Card informations
	name: {
		en: "Castform",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},

	abilities: [{
		id: 804,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Temperamental Weather",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Forecast",
		},
		text: {
			en: "Search your deck for a Stadium card and play it. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Ball",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
