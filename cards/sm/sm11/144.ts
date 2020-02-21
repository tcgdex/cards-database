import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-144",
	localId: 144,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/144/high",
		},
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},

	abilities: [{
		id: 77,
		type: AbilityType.TALENT,
		name: {
			en: "Prowl",
			fr: "Rôder",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher une carte dans votre deck, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
