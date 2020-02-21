import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-39",
	localId: 39,

	// Card informations
	name: {
		en: "Walrein",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/39/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 1053,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Freeze-up",
		},
		text: {
			en: "Once during your turn, when you play Walrein from your hand to evolve 1 of your Pokémon, you may flip 2 coins. If both are heads, discard 1 of the Defending Pokémon and all cards attached to it. (This doesn't count as a Knocked Out Pokémon.)",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Bind",
		},
		text: {
			en: "If your opponent doesn't discard a card from his or her hand, the Defending Pokémon is now Paralyzed.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
