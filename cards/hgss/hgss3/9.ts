import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-9",
	localId: 9,

	// Card informations
	name: {
		en: "Togekiss",
		fr: "Togekiss",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/9/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/9/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/9/high",
		},
	},

	evolveFrom: {
		en: "Togetic",
		fr: "Togetic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blessed Wings",
			fr: "Ailes bénies",
		},
		text: {
			en: "Remove all damage counters from each of your Pokémon. Shuffle Togekiss and all cards attached to it back into your deck.",
			fr: "Retirez tous les marqueurs de dégât à chacun de vos Pokémon. Mélangez Togekiss et toutes les cartes qui lui sont attachées avec votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Cutter",
			fr: "Tranch'Air",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
