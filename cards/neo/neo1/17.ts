import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Typhlosion",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/17/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},

	abilities: [{
		id: 195,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fire Recharge",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Fire Pokémon. This power can't be used if Typhlosion is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flame Burst",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
