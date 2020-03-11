import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-12",
	localId: 12,

	// Card informations
	name: {
		en: "Porygon2",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/12/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Keiji Kinebuchi",

	abilities: [{
		id: 714,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Converter",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose 1 Basic Energy card attached to 1 of your Pokémon and choose an Energy type. Treat that Energy card as that type until the end is your turn. This power can't be used if Porygon2 is Asleep, Confused, or Paralyzed. If Porygon2 becomes Asleep, Confused, or Paralyzed, the Energy card goes back to its original type.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Delta Beam",
		},
		text: {
			en: "Flip a coin. If heads, choose whether the Defending Pokémon becomes Asleep, Confused, or Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
