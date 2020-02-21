import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-46",
	localId: 46,

	// Card informations
	name: {
		en: "Luxray",
		fr: "Luxray",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 405,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/46/high",
		},
	},

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Flash Impact",
			fr: "Impact-Flash",
		},
		text: {
			en: "Does 20 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
