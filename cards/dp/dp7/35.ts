import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-35",
	localId: 35,

	// Card informations
	name: {
		en: "Dusclops",
		fr: "Dusclops",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/35/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/35/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/35/high.png",
		},
	},

	evolveFrom: {
		en: "Duskull",
		fr: "Skélénox",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trick Room",
			fr: "Distorsion",
		},
		text: {
			en: "If you have a Stadium card in play, this attack does 40 damage plus 20 more damage. If your opponent has a Stadium card in play, remove 2 damage counters from Dusclops.",
			fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si votre adversaire a une carte Stade en jeu, retirez à Teraclope 2 marqueurs de dégât.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

