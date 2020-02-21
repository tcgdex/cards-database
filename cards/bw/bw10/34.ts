import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-34",
	localId: 34,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/34/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/34/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/34/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Creepy Wind",
			fr: "Vent Perturbant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wind Blast",
			fr: "Vent Explosif",
		},
		text: {
			en: "This attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
