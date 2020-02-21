import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-66",
	localId: 66,

	// Card informations
	name: {
		en: "Garbodor",
		fr: "Miasmax",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 569,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/66/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/66/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/66/high",
		},
	},

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Biosmog",
			fr: "Brouillard Toxique",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, discard an Energy attached to that Pokémon.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Bomb",
			fr: "Bomb-Beurk",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
