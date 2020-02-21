import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-55",
	localId: 55,

	// Card informations
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 472,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/55/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/55/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/55/high",
		},
	},

	evolveFrom: {
		en: "Gligar",
		fr: "Skorgla",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Tail",
			fr: "Queue tranchante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
