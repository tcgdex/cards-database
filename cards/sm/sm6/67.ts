import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-67",
	localId: 67,

	// Card informations
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 689,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/67/high",
		},
	},

	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Seven Shock",
			fr: "Choc à Sept",
		},
		text: {
			en: "If you have exactly 7 cards in your hand, your opponent's Active Pokémon is now Paralyzed.",
			fr: "S’il vous reste exactement 7 cartes en main, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
