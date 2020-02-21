import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-88",
	localId: 88,

	// Card informations
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/88/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/88/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/88/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
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
			en: "Transfer Junk",
			fr: "Transfert de Camelote",
		},
		text: {
			en: "Put a Team Plasma Pokémon, a Team Plasma Trainer card, and a Team Plasma Energy card from your discard pile into your hand.",
			fr: "Ajoutez un Pokémon de la Team Plasma, une carte Dresseur de la Team Plasma et une carte Énergie de la Team Plasma de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
