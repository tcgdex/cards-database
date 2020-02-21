import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-75",
	localId: 75,

	// Card informations
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 127,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/75/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/75/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gripthrow",
			fr: "Lance-grippe",
		},
		text: {
			en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sever",
			fr: "Couper",
		},
		text: {
			en: "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 50 damage plus 30 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon de Niveau 2, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
