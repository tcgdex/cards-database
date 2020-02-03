import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-31",
	localId: 31,

	// Card informations
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/31/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/31/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/31/high.png",
		},
	},

	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 80
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Entomb",
			fr: "Cercueil de Glace",
		},
		text: {
			en: "The Defending Pokémon is now Paralyzed. This Pokémon can't use Ice Entomb during your next turn.",
			fr: "Le Pokémon Défenseur est maintenant Paralysé. Ce Pokémon ne peut pas utiliser Cercueil de Glace pendant votre prochain tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

