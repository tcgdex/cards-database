import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-57",
	localId: 57,

	// Card informations
	name: {
		en: "Krokorok",
		fr: "Escroco",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 552,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/57/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/57/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/57/high",
		},
	},

	evolveFrom: {
		en: "Sandile",
		fr: "Mascaïman",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dark Clamp",
			fr: "Pince des Ténèbres",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Swing",
			fr: "Double Oscillation",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
