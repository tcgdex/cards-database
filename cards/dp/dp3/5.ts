import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-5",
	localId: 5,

	// Card informations
	name: {
		en: "Flygon",
		fr: "Libegon",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/5/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/5/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/5/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Daisuke Ito",

	abilities: [{
		id: 314,
		type: AbilityType.POKEBODY,
		name: {
			en: "Irritating Buzz",
			fr: "Bourdonnement irritant",
		},
		text: {
			en: "As long as Flygon is your Active Pokémon, put 1 damage counter on each of your opponent's Active Pokémon between turns, excluding Fighting Pokémon.",
			fr: "Tant que Libegon est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon Actifs de votre adversaire entre deux tours, Pokémon Fighting exclus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Sonic",
			fr: "Sable sonique",
		},
		text: {
			en: "If you attach a Fighting Energy card from your hand to Flygon during this turn, this attack does 60 damage plus 20 more damage.",
			fr: "Si vous attachez une carte Énergie Fighting de votre main à Libegon lors de ce tour, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
