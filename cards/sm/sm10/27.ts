import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-27",
	localId: 27,

	// Card informations
	name: {
		en: "Litten",
		fr: "Flamiaou",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 725,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Caturday",
			fr: "Chamedi",
		},
		text: {
			en: "Draw a card. If you do, this Pokémon is now Asleep.",
			fr: "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Bite",
			fr: "Grosse Morsure",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
