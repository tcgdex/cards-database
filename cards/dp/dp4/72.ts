import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-72",
	localId: 72,

	// Card informations
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/72/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/72/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kenkichi Toyama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnotic Gaze",
			fr: "Regard hypnotique",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Expand",
			fr: "Pousstoidla",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Jigglypuff by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Rondoudou par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
