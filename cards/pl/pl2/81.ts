import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-81",
	localId: 81,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex Niv. 40",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/81/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/81/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 441,
		type: AbilityType.POKEBODY,
		name: {
			en: "Bad Sleeping Habits",
			fr: "Mauvaises habitudes de dodo",
		},
		text: {
			en: "As long as Snorlax is Asleep, your opponent's Active Pokémon can't retreat.",
			fr: "Tant que Ronflex est Endormi, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toss and Turn",
			fr: "Retournement",
		},
		text: {
			en: "If Snorlax is Asleep, this attack does 20 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)",
			fr: "Si Ronflex est Endormi, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires. (Cette attaque peut être utilisée même si Ronflex est Endormi.)",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Press",
			fr: "Lourde pression",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage. If tails, Snorlax is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si c'est pile, Ronflex est maintenant Endormi.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 4,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
