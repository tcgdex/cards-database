import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-76",
	localId: 76,

	// Card informations
	name: {
		en: "Scizor-EX",
		fr: "Cizayox-EX",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/76/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/76/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/76/high",
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
			Type.METAL
		],
		name: {
			en: "Steel Wing",
			fr: "Aile d'Acier",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Gale Thrust",
			fr: "Coup d'Bourrasque",
		},
		text: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
