import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen Niv. 54",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/30/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/30/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/30/high.png",
		},
	},

	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 704,
		type: AbilityType.POKEBODY,
		name: {
			en: "Maternal Comfort",
			fr: "Réconfort maternel",
		},
		text: {
			en: "At any time between turns, remove 1 damage counter from each of your Pokémon. You can't use more than 1 Maternal Comfort Poké-Body between turns.",
			fr: "N'importe quand entre deux tours, retirez à chacun de vos Pokémon 1 marqueur de dégât. Vous ne pouvez pas utiliser plus d'1 Poké-Body Réconfort maternel entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ruthless Tail",
			fr: "Queue sans pitié",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each of your opponent's Benched Pokémon.",
			fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

