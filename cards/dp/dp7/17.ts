import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-17",
	localId: 17,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Dusknoir",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/17/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/17/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/17/high",
		},
	},

	evolveFrom: {
		en: "Dusclops",
		fr: "Teraclope",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Tomoaki Imakuni",

	abilities: [{
		id: 568,
		type: AbilityType.POKEBODY,
		name: {
			en: "Spirit Pulse",
			fr: "Vibration spirituelle",
		},
		text: {
			en: "As long as Dusknoir is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Energy attached to it between turns.",
			fr: "Tant que Noctunoir est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant de l'Énergie entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Mist",
			fr: "Brume obscurité",
		},
		text: {
			en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégât, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
