import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Drapion",
		fr: "Drascore",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 452,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/23/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/23/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/23/high",
		},
	},

	evolveFrom: {
		en: "Skorupi",
		fr: "Drapion",
	},

	tags: [
		Tag.STAGE1,
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
			en: "Stomp",
			fr: "Écrasement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Claws",
			fr: "Griffes empoisonnée",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
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
