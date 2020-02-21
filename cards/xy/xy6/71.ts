import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-71",
	localId: 71,

	// Card informations
	name: {
		en: "Swellow",
		fr: "Hélédelle",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/71/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
			fr: "Serre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerial Ace",
			fr: "Aéropique",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
