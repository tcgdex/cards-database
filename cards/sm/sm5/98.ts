import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-98",
	localId: 98,

	// Card informations
	name: {
		en: "Gabite",
		fr: "Carmache",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 444,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/98/high",
		},
	},

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Ascension",
			fr: "Ascension",
		},
		text: {
			en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
