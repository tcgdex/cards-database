import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 521,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/82/high",
		},
	},

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tailwind",
			fr: "Vent Arrière",
		},
		text: {
			en: "Attach an Energy card from your hand to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie de votre main à 1 de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feather Strike",
			fr: "Tir de Plumes",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage. If tails, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires. Si c'est pile, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
