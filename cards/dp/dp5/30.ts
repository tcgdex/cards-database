import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-30",
	localId: 30,

	// Card informations
	name: {
		en: "Torterra",
		fr: "Torterra",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 389,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/30/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/30/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/30/high",
		},
	},

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frenzy Plant",
			fr: "Vege-Attak",
		},
		text: {
			en: "Torterra can't use Frenzy Plant during your next turn.",
			fr: "Torterra ne peut pas utiliser Vege-Attak lors de votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
