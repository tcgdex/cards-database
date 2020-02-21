import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-80",
	localId: 80,

	// Card informations
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/80/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/80/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/80/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Draco Melody",
			fr: "Mélodie Draconienne",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a Dragon Pokémon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon Dragon dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cotton Guard",
			fr: "Cotogarde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
