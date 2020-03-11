import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base5-39",
	localId: 39,

	// Card informations
	name: {
		en: "Dark Kadabra",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 64,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/39/high",
		},
	},

	evolveFrom: {
		en: "Abra",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 1189,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Matter Exchange",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand in order to draw a card. This power can't be used if Dark Kadabra is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Mind Shock",
		},
		text: {
			en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
