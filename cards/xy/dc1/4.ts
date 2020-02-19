import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Team Aqua's Sealeo",
		fr: "Phogleur de la Team Aqua",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 364,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/4/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/4/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/4/high.png",
		},
	},

	evolveFrom: {
		en: "Team Aqua's Spheal",
		fr: "Obalie de la Team Aqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Splatter",
			fr: "Crépitement",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hail Storm",
			fr: "Déluge de Grêle",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Team Magma Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de la Team Magma, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card

