import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-70",
	localId: 70,

	// Card informations
	name: {
		en: "Krokorok",
		fr: "Escroco",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 552,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/70/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/70/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/70/high.png",
		},
	},

	evolveFrom: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

