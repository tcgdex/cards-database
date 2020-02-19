import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp3/5/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/5/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/5/high.png",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},

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

