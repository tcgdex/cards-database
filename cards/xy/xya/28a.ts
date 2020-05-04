import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xya-28a",
	localId: "28a",

	// Card informations
	name: {
		fr: "Voltali-ex",
	},

	hp: 160,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/28a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/28a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			fr: "Météores",
		},
		text: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		name: {
			fr: "Rayon Flash",
		},
		text: {
			fr: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
		},
		damage: "{L}{C}{C}"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
