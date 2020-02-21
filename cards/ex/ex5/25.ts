import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-25",
	localId: 25,

	// Card informations
	name: {
		en: "Snow-cloud Castform",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 351,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/25/high",
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
			en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Sunny Castform and switch it with Snow-cloud Castform. (Any cards attached to Snow-cloud Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Snow-cloud Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Flurries",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "White Snow",
		},
		text: {
			en: "If Magnetic Storm is in play, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
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
