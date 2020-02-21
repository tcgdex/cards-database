import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-36",
	localId: 36,

	// Card informations
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 673,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/36/high",
		},
	},

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Wallop",
			fr: "Rafale de Feuilles",
		},
		text: {
			en: "During your next turn, this Pokémon's Leaf Wallop attack does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Rafale de Feuilles de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
