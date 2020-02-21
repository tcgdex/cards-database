import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-87",
	localId: 87,

	// Card informations
	name: {
		en: "Furfrou",
		fr: "Couafarel",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 676,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/87/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/87/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tight Jaw",
			fr: "Mâchoire Serrée",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
