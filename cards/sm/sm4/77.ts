import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-77",
	localId: 77,

	// Card informations
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 784,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/77/high",
		},
	},

	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "War Cry",
			fr: "Cri de Guerre",
		},
		text: {
			en: "If you have fewer Pokémon in play than your opponent, this attack does 90 more damage.",
			fr: "S’il vous reste moins de Pokémon en jeu que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Clanging Scales",
			fr: "Vibrécaille",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
