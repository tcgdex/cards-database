import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-150",
	localId: 150,

	// Card informations
	name: {
		en: "Zapdos",
		fr: "Electhor",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/150/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/150/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/150/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Burn",
			fr: "Brûlure éclairante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, Zapdos does 30 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Si c'est pile, Electhor s'inflige 30 dégâts.",
		},
		damage: 30
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
