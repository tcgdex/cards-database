import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-SL3",
	localId: "SL3",

	// Card informations
	name: {
		en: "Entei",
		fr: "Entei",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/SL3/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/SL3/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 93,
		name: "Yuri Umemura"
	},

	abilities: [{
		id: 188,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extreme Speed",
			fr: "Vitesse extrême",
		},
		text: {
			en: "Entei's Retreat Cost is Colorless less for each Fire Energy attached to Entei.",
			fr: "Le Coût de retraite de Entei est Colorless de moins pour chaque Énergie Fire attachée à Entei.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Wild Blaze",
			fr: "Brasier sauvage",
		},
		text: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
