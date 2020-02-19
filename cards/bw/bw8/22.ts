import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-22",
	localId: 22,

	// Card informations
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 608,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/22/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/22/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/22/high.png",
		},
	},

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 466,
		type: AbilityType.TALENT,
		name: {
			en: "Freefloating",
			fr: "Apesanteur",
		},
		text: {
			en: "If this Pokémon has no Energy attached to it, this Pokémon has no Retreat Cost.",
			fr: "Si aucune Énergie n'est attachée à ce Pokémon, ce Pokémon n'a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

