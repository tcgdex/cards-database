import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-166",
	localId: 166,

	// Card informations
	name: {
		en: "Toucannon",
		fr: "Bazoucan",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 733,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/166/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/166/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/166/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/166/high",
		},
	},

	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Heat Beak",
			fr: "Bec Thermique",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giganticannon",
			fr: "Gigantocanon",
		},
		text: {
			en: "If this Pokémon evolved during this turn, this attack does nothing.",
			fr: "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
