import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-60",
	localId: 60,

	// Card informations
	name: {
		en: "Cubone",
		fr: "Osselait",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 104,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/60/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/60/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 911,
		type: AbilityType.POKEBODY,
		name: {
			en: "Lonely Bone",
			fr: "Ossolitaire",
		},
		text: {
			en: "Any damage done to Cubone by your opponent's attacks is reduced by 20 for each Marowak in your discard pile (after applying Weakness and Resistance).",
			fr: "Tous les dégâts infligés à Osselait par les attaques de votre adversaire sont réduits de 20 pour chaque Ossatueur dans votre pile de défausse (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bone Rush",
			fr: "Charge-os",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce qu'elle tombe sur pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
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

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
