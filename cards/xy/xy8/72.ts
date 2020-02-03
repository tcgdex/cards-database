import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-72",
	localId: 72,

	// Card informations
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 528,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/72/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/72/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/72/high.png",
		},
	},

	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
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
			en: "Wave Amplification",
			fr: "Amplification d'Onde",
		},
		text: {
			en: "During your next turn, this Pokémon's Returning Echo attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Écho de Retour de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Returning Echo",
			fr: "Écho de Retour",
		},
		text: {
			en: "Flip a coin. If tails, return this Pokémon and all cards attached to it to your hand.",
			fr: "Lancez une pièce. Si c'est pile, reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
		},
		damage: 60
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card

