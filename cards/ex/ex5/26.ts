import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-26",
	localId: 26,

	// Card informations
	name: {
		en: "Sunny Castform",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/26/high",
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
			en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Sunshine",
		},
		text: {
			en: "Search your discard pile for a Stadium card, show it to your opponent, and put it into your hand.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sunburn",
		},
		text: {
			en: "If High Pressure System is in play, the Defending Pokémon is now Burned.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
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
