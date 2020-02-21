import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY155",
	localId: "XY155",

	// Card informations
	name: {
		en: "Wobbuffet BREAK",
		fr: "Qulbutoké TURBO",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY155/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY155/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY155/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY155/high",
		},
	},

	evolveFrom: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Right Back at You",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon. During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Retour de Dégâts",
		},
		text: {
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon. Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
