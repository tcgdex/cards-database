import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 416,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/39/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/39/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/39/high.png",
		},
	},

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Honey",
			fr: "Feuille miel",
		},
		text: {
			en: "Discard a Grass Energy attached to Vespiquen and remove all damage counters from 1 of your Benched Grass Pokémon.",
			fr: "Défaussez une Énergie Grass attachée à Apireine  et retirez à 1 de vos Pokémon de Banc Grass tous ses marqueurs de dégât.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Attack Order",
			fr: "Appel Attak",
		},
		text: {
			en: "Does 10 damage times the number of Grass Pokémon in play (both yours and your opponent's).",
			fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon Grass en jeu (les vôtres et ceux de votre adversaire).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

