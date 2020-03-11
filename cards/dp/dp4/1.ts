import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-1",
	localId: 1,

	// Card informations
	name: {
		en: "Blaziken",
		fr: "Brasegali",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/1/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/1/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/1/high",
		},
	},

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fire Dance",
			fr: "Danse du feu",
		},
		text: {
			en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon.",
			fr: "Choisissez dans votre pile de défausse une carte Énergie Fire et attachez-la à 1 de vos Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flame Kick",
			fr: "Coup enflammé",
		},
		text: {
			en: "Discard 2 Fire Energy attached to Blaziken. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Fire attachées à Brasegali. Cette attaque inflige 80 dégâts à 1 des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
