import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-31",
	localId: 31,

	// Card informations
	name: {
		en: "Raichu GL",
		fr: "Raichu  Niv. 46",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/31/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/31/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Thunder Throw",
			fr: "Lancer de tonnerre",
		},
		text: {
			en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque leur inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Repeat Lightning",
			fr: "Éclair à répétition",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each of your opponent's Benched Pokémon that has any damage counters on it.",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire possédant des marqueurs de dégât.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
