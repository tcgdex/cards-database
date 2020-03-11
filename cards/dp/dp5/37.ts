import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-37",
	localId: 37,

	// Card informations
	name: {
		en: "Grotle",
		fr: "Boskara",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 388,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/37/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/37/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/37/high",
		},
	},

	evolveFrom: {
		en: "Turtwig",
		fr: "Tortipouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Planting",
			fr: "Plantations",
		},
		text: {
			en: "Attach a Grass Energy card from your hand to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie Grass de votre main à 1 de vos Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Body Slam",
			fr: "Plaquage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
