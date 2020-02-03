import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-117",
	localId: 117,

	// Card informations
	name: {
		en: "Lopunny",
		fr: "Lockpin",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 428,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/117/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/117/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/117/high.png",
		},
	},

	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Healing Melody",
			fr: "Mélodie Apaisante",
		},
		text: {
			en: "Flip a coin. If heads, heal 60 damage from each of your Pokémon.",
			fr: "Lancez une pièce. Si c'est face, soignez 60 dégâts à chacun de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Kick Away",
			fr: "Coud'Pied Éjecteur",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

