import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-93",
	localId: 93,

	// Card informations
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 630,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/93/high",
		},
	},

	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Trash Crash",
			fr: "Déchets Déchus",
		},
		text: {
			en: "Discard an Item card from your hand. If you do, this attack does 60 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness or Resistance.",
			fr: "Défaussez une carte Objet de votre main. Dans ce cas, cette attaque inflige 60 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Bird",
			fr: "Rapace",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 120
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
		name: "Team Up",
		code: "sm9"
	}
}

export default card
