import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-RC3",
	localId: "RC3",

	// Card informations
	name: {
		en: "Serperior",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 497,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC3/high.png",
		},
	},

	evolveFrom: {
		en: "Servine",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 20,
		type: AbilityType.TALENT,
		name: {
			en: "Royal Garden",
		},
		text: {
			en: "If this Pokémon has any Grass Energy attached to it, this Pokémon has no Retreat Cost.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
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

