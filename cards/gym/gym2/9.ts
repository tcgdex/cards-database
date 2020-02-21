import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-9",
	localId: 9,

	// Card informations
	name: {
		en: "Koga's Beedrill",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/9/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Nerve Poison",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Needle",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Koga's Beedrill stays in play (even putting Koga's Beedrill on the Bench won't let you use it again).",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
