import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-77",
	localId: 77,

	// Card informations
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 706,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/77/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/77/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/77/high",
		},
	},

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 817,
		type: AbilityType.TALENT,
		name: {
			en: "Slip Trip",
			fr: "Bave Glissante",
		},
		text: {
			en: "Each player can't attach any Pokémon Tool cards from his or her hand to any of his or her Pokémon.",
			fr: "Aucun joueur ne peut attacher de carte Outil Pokémon de sa main à ses Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Discard the top card of your deck.",
			fr: "Défaussez la carte du dessus de votre deck.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
