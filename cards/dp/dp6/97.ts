import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-97",
	localId: 97,

	// Card informations
	name: {
		en: "Gloom",
		fr: "Ortide",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/97/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/97/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/97/high.png",
		},
	},

	evolveFrom: {
		en: "Oddish",
		fr: "Myrapla",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Space Out",
			fr: "Sonné",
		},
		text: {
			en: "Remove 2 damage counters from Gloom. Gloom is now Asleep.",
			fr: "Retirez à Ortide 2 marqueurs de dégât. Ortide est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Stinky Nectar",
			fr: "Nectar puant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

