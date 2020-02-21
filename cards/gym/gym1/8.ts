import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Lt. Surge's Magneton",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 1003,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Charge",
		},
		text: {
			en: "As often as you like during your turn (before your attack), if Lt. Surge's Magneton is your Active Pokémon, you may take 1 Lightning Energy card attached to 1 of your Pokémon and attach it to Lt. Surge's Magneton. This power can't be used if Lt. Surge's Magneton is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mega Shock",
		},
		text: {
			en: "Flip a coin. If tails, Lt. Surge's Magneton does 20 damage to itself.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
