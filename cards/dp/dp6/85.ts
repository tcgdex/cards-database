import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-85",
	localId: 85,

	// Card informations
	name: {
		en: "Bellsprout",
		fr: "Chetiflor",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 69,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/85/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/85/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Vine Bind",
			fr: "Liane enroulante",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't use any Poké-Powers during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Careless Tackle",
			fr: "Plaquage imprudent",
		},
		text: {
			en: "Bellsprout does 10 damage to itself.",
			fr: "Chetiflor s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

