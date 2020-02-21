import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY15",
	localId: "XY15",

	// Card informations
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 685,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY15/high",
		},
	},

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Cotton Guard",
			fr: "Cotogarde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleepy Ball",
			fr: "Boule Dodo",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
