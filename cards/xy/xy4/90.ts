import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-90",
	localId: 90,

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
			en: "https://assets.tcgdex.net/en/xy/xy4/90/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/90/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/90/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
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
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card

