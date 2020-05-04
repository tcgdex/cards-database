import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-150",
	localId: 150,

	// Card informations
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 786,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/150/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/150/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/150/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 1263,
		type: AbilityType.TALENT,
		name: {
			en: "Charmed Charm",
			fr: "Amulette Enchantée",
		},
		text: {
			en: "Whenever you attach a Pokémon Tool card that has \"Fairy Charm\" in its name from your hand to this Pokémon during your turn, you may leave your opponent's Active Pokémon Confused.",
			fr: "Chaque fois que vous attachez une carte Outil Pokémon avec « Amulette Féerique » dans son nom de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 70
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
