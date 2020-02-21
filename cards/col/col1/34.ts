import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 465,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/34/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/34/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/34/high",
		},
	},

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grind",
			fr: "Écrase",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to Tangrowth.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à Bouldeneu.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Plow Over",
			fr: "Labour",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, put 1 Energy card attached to the Defending Pokémon in the Lost Zone.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé. Si c’est pile, placez 1 carte Énergie attachée au Pokémon Défenseur dans la Zone Perdue.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
