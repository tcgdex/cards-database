import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-108",
	localId: 108,

	// Card informations
	name: {
		en: "Dragonite-EX",
		fr: "Dracolosse-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 746,
		type: AbilityType.TALENT,
		name: {
			en: "Bust In",
			fr: "Entrée en Force",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may move any number of basic Energy attached to your Pokémon to this Pokémon. If you do, switch this Pokémon with your Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez déplacer des Énergies de base attachées à vos Pokémon vers ce Pokémon. Dans ce cas, échangez ce Pokémon avec votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.LIGHTNING
		],
		name: {
			en: "Jet Sonic",
			fr: "Rafale Supersonique",
		},
		text: {
			en: "You may discard an Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
