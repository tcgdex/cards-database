import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/68/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/68/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Filch",
			fr: "Maraudage",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Rip Claw",
			fr: "Griffe Déchirante",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	}],





	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
