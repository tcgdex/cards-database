import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-86",
	localId: 86,

	// Card informations
	name: {
		en: "Weedle",
		fr: "Aspicot Niv. 6",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 13,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/86/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/86/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Rescue String",
			fr: "Ficelle sauveuse",
		},
		text: {
			en: "Search your discard pile for up to 5 Pokémon, show them to your opponent, and shuffle them into your deck.",
			fr: "Choisissez dans votre pile de défausse jusqu'à 5 Pokémon, montrez-les à votre adversaire et mélangez-les à votre deck.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Needling Sting",
			fr: "Piqûre piquante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
