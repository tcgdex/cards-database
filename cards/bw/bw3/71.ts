import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-71",
	localId: 71,

	// Card informations
	name: {
		en: "Golett",
		fr: "Gringolem",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 622,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/71/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/71/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/71/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dynamic Punch",
			fr: "Dynamopoing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

