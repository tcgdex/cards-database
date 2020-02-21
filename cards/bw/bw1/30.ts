import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-30",
	localId: 30,

	// Card informations
	name: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 502,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/30/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/30/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/30/high",
		},
	},

	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Tail",
			fr: "Hydroqueue",
		},
		text: {
			en: "Flip a coin for each Water Energy attached to this Pokémon. This attack does 10 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Water attachée à ce Pokémon. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
