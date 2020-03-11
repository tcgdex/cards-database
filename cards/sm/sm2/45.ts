import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-45",
	localId: 45,

	// Card informations
	name: {
		en: "Vikavolt-GX",
		fr: "Lucanon-GX",
	},

	hp: 240,

	type: [
		Type.LIGHTNING,
	],

	dexId: 738,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/45/high",
		},
	},

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Charge Beam",
			fr: "Rayon Chargé",
		},
		text: {
			en: "Attach an Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Zap Cannon",
			fr: "Super Élecanon",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 180
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigatron-GX",
			fr: "Gigatron-GX",
		},
		text: {
			en: "This attack does 60 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 60 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
