import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-41",
	localId: 41,

	// Card informations
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 206,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/41/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/41/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glare",
			fr: "Intimidation",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fade Out",
			fr: "Faiblir",
		},
		text: {
			en: "Return Dunsparce and all cards attached to it to your hand.",
			fr: "Reprenez Insolourdo et toutes les cartes qui lui sont attachées dans votre main.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
