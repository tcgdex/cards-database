import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-19",
	localId: 19,

	// Card informations
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/19/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/19/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/19/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dream Catcher",
			fr: "Attrap'rêve",
		},
		text: {
			en: "If the Defending Pokémon is Asleep, move all damage counters from Hypno to the Defending Pokémon.",
			fr: "Si le Pokémon Défenseur est Endormi, déplacez tous les marqueurs de dégât d'Hypnomade sur le Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
