import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-RC10",
	localId: "RC10",

	// Card informations
	name: {
		en: "Gardevoir",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC10/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Eternal Radiance",
		},
		text: {
			en: "Move all damage counters from this Pokémon to the Defending Pokémon. This Pokémon can't use Eternal Radiance during your next turn.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
