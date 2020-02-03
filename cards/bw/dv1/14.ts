import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},

	hp: 70,

	type: [
		Type.DRAGON,
	],

	dexId: 611,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/14/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/14/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/14/high.png",
		},
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 878,
		type: AbilityType.TALENT,
		name: {
			en: "Grit",
			fr: "Vaillance",
		},
		text: {
			en: "If this Pokémon is affected by a Special Condition, each of its attacks does 40 more damage (before applying Weakness and Resistance).",
			fr: "Si ce Pokémon est affecté par un État Spécial, chacune de ses attaques inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card

