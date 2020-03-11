import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-RT5",
	localId: "RT5",

	// Card informations
	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage Niv. 46",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT5/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT5/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hiroki Fuchino",

	abilities: [{
		id: 668,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Wash Shift",
			fr: "Mutation lavage",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Wash Rotom's type is Water until the end of your turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Lavage est de type Water jusqu'à la fin de votre tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cleanse Away",
			fr: "Grand nettoyage",
		},
		text: {
			en: "Remove 3 damage counters from each of your Benched Pokémon.",
			fr: "Retirez à chacun de vos Pokémon de Banc 3 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Drain Wash",
			fr: "Jet d'O éliminatoire",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, choose 1 card from your opponent's hand without looking and discard it.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
