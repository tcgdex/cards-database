import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-85",
	localId: 85,

	// Card informations
	name: {
		en: "Staravia",
		fr: "Etourvol",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 397,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/85/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/85/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/85/high.png",
		},
	},

	evolveFrom: {
		en: "Starly",
		fr: "Etourmi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Peck",
			fr: "Double picpic",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Crash",
			fr: "Crash aérien",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

