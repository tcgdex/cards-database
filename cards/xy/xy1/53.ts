import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Scolipede",
		fr: "Brutapode",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 545,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/53/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/53/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/53/high",
		},
	},

	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Random Peck",
			fr: "Coup d'Bec au Pif",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Ring",
			fr: "Anneau de Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. That Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
