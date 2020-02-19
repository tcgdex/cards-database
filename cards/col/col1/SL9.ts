import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-SL9",
	localId: "SL9",

	// Card informations
	name: {
		en: "Raikou",
		fr: "Raikou",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/SL9/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/SL9/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},

	abilities: [{
		id: 188,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extreme Speed",
			fr: "Vitesse extrême",
		},
		text: {
			en: "Raikou's Retreat Cost is Colorless less for each Lightning Energy attached to Raikou.",
			fr: "Le Coût de retraite de Raikou est Colorless de moins pour chaque Énergie Lightning attachée à Raikou",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Thunder",
			fr: "Tonnerre déchaîné",
		},
		text: {
			en: "Does 20 damage to 1 of your Pokémon, and don't apply Weakness and Resistance to this damage.",
			fr: "Inflige 20 dégâts à 1 de vos Pokémon. N’appliquez ni la Faiblesse ni la Résistance à ces dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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

