import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-114",
	localId: 114,

	// Card informations
	name: {
		en: "Tornadus-EX",
		fr: "Boréas-EX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 641,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/114/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/114/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/114/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/114/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Windfall",
			fr: "Rafale de Vent",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Blast",
			fr: "Rafale d'Explosions",
		},
		text: {
			en: "Does 30 more damage for each Plasma Energy attached to this Pokémon.",
			fr: "Inflige 30 dégâts supplémentaires pour chaque Énergie Plasma attachée à ce Pokémon.",
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

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

