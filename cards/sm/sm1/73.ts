import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-73",
	localId: 73,

	// Card informations
	name: {
		en: "Passimian",
		fr: "Quartermac",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 766,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Fling",
			fr: "Dégommage",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Team Play",
			fr: "Jeu d’Équipe",
		},
		text: {
			en: "This attack does 30 more damage for each of your Benched Passimian.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Quartermac sur votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
