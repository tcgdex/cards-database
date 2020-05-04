import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Honchkrow",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/10/high",
		},
	},

	evolveFrom: {
		en: "Murkrow",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kazuyuki Kano",

	abilities: [{
		id: 518,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dark Genes",
		},
		text: {
			en: "As long as Honchkrow has the Energy necessary to use its attack, each of your Murkrow can use Honchkrow's attack as its own without the necessary Energy to use that attack.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Wing Flaps",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
