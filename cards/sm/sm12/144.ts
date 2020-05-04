import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-144",
	localId: 144,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	hp: 50,

	type: [
		Type.FAIRY,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Doll Swap",
			fr: "Échange Poupées",
		},
		text: {
			en: "Put this Pokémon and all cards attached to it into your hand. If you do, you may play Lillie's Poké Doll from your hand as your new Active Pokémon.",
			fr: "Placez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main. Dans ce cas, vous pouvez jouer Poké Poupée de Lilie de votre main comme nouveau Pokémon Actif.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
