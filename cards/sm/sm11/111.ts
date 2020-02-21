import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-111",
	localId: 111,

	// Card informations
	name: {
		en: "Relicanth",
		fr: "Relicanth",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/111/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/111/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Deep Sea Boring",
			fr: "Forage Abyssal",
		},
		text: {
			en: "Search your deck for a Trainer card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte Dresseur dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
