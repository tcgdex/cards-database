import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-75",
	localId: 75,

	// Card informations
	name: {
		en: "Klang",
		fr: "Clic",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 600,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/75/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/75/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/75/high.png",
		},
	},

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
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
			Type.METAL
		],
		name: {
			en: "Bind",
			fr: "Étreinte",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gear Grind",
			fr: "Lancécrou",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

