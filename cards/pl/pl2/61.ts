import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-61",
	localId: 61,

	// Card informations
	name: {
		en: "Forretress G",
		fr: "Forretress  Niv. 35",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/61/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/61/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Ryota Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shell Scatter",
			fr: "Écrat'coquille",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Forretress can't use Shell Scatter during your next turn.",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Forretress  ne peut pas utiliser Écras'coquille lors de votre prochain tour.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Bomb Risk",
			fr: "Risque de bombe",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, Forretress does 80 damage to itself.",
			fr: "Inflige 10 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Lancez une pièce. Si c'est pile, Forretress  s'inflige 80 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
