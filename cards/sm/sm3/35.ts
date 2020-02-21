import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-35",
	localId: 35,

	// Card informations
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/35/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/35/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/35/high",
		},
	},

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},

	abilities: [{
		id: 70,
		type: AbilityType.TALENT,
		name: {
			en: "Thick Fat",
			fr: "Isograisse",
		},
		text: {
			en: "This Pokémon takes 30 less damage from the attacks of your opponent's Fire or Water Pokémon (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques des Pokémon Fire ou Water de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
			fr: "Cascade",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
