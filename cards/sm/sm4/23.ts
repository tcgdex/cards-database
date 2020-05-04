import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-23",
	localId: 23,

	// Card informations
	name: {
		en: "Octillery",
		fr: "Octillery",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/23/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ink Spit",
			fr: "Sepia’Crachat",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Special Artillery",
			fr: "Artillerie Spéciale",
		},
		text: {
			en: "You may discard a Special Energy from this Pokémon. If you do, this attack does 80 more damage.",
			fr: "Vous pouvez défausser une Énergie spéciale attachée à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
