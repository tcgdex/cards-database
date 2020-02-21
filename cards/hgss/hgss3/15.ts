import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/15/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/15/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/15/high",
		},
	},

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornebre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec l'un des Pokémon de son Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Blindside",
			fr: "Angle mort",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez l'un des Pokémon de votre adversaire ayant des marqueurs de dégât. Cette attaque inflige 50 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
