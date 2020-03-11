import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-78",
	localId: 78,

	// Card informations
	name: {
		en: "Raticate G",
		fr: "Rattatac ",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/78/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/78/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/78/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Ryota Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Find",
			fr: "Trouver",
		},
		text: {
			en: "Search your discard pile for a Trainer card or a Supporter card, show it to your opponent, and put it into your hand.",
			fr: "Choisissez dans votre pile de défausse une carte Dresseur ou une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Biting Fang",
			fr: "Croc mordant",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
