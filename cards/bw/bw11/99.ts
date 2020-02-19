import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-99",
	localId: 99,

	// Card informations
	name: {
		en: "Hydreigon",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/99/high.png",
		},
	},

	evolveFrom: {
		en: "Zweilous",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},

	abilities: [{
		id: 159,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Trance",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragonblast",
		},
		text: {
			en: "Discard 2 Darkness Energy attached to this Pokémon.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

