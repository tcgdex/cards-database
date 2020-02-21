import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-6",
	localId: 6,

	// Card informations
	name: {
		en: "Bronzong",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/6/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},

	abilities: [{
		id: 512,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Miracle Oracle",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card. Then, discard a card from your hand. If you discard an Energy card, draw 1 more card. This power can't be used if Bronzong is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Shady Stamp",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
