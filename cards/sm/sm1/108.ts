import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-108",
	localId: 108,

	// Card informations
	name: {
		en: "Toucannon",
		fr: "Bazoucan",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 733,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/108/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/108/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/108/high.png",
		},
	},

	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Echoed Voice",
			fr: "Écho",
		},
		text: {
			en: "During your next turn, this Pokémon's Echoed Voice attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Écho de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beak Blast",
			fr: "Bec-Canon",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

