import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-23",
	localId: 23,

	// Card informations
	name: {
		en: "Manectric-EX",
		fr: "Élecsprint-EEX",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/23/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/23/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/23/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Overrun",
			fr: "Dépassement",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Assault Laser",
			fr: "Laser d'Assaut",
		},
		text: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
			fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
