import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Blissey",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/5/high",
		},
	},

	evolveFrom: {
		en: "Chansey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 513,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Kind Egg",
		},
		text: {
			en: "Once during your turn (before your attack), if Happiny is anywhere under Blissey, you may choose a number of cards in your hand up to the amount of Energy attached to Blissey and put those cards on top of your deck. Shuffle your deck afterward. Then, draw that many cards. This power can't be used if Blissey is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Happy Chance",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to Blissey. Before doing damage, you may search your discard pile for a basic Energy card and attach it to Blissey.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
