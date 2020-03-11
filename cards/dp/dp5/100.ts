import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-100",
	localId: 100,

	// Card informations
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/100/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/100/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 599,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Mode Crash",
			fr: "Mode crash",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Porygon-Z LV.X from your hand onto your Active Porygon-Z, you may discard all of your opponent's Special Energy cards in play.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Porygon-Z LV.X de votre main sur votre Porygon-Z Actif, vous pouvez défausser toutes les cartes Énergie Spéciale que votre adversaire a en jeu.",
		}
	}],



	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
