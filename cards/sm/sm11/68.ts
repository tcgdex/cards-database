import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-68",
	localId: 68,

	// Card informations
	name: {
		en: "Thundurus",
		fr: "Fulguris",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunderous Gale",
			fr: "Bourrasque Fulgurante",
		},
		text: {
			en: "If Tornadus is on your Bench, this attack does 50 more damage.",
			fr: "Si Boréas est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Thunder",
			fr: "Tonnerre Déchaîné",
		},
		text: {
			en: "This attack does 40 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
