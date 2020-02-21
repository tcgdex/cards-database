import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-57",
	localId: 57,

	// Card informations
	name: {
		en: "Liepard",
		fr: "Léopardus",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 510,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/57/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/57/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/57/high",
		},
	},

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Gentle Bite",
			fr: "Morsure Douce",
		},
		text: {
			en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 60 (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 60 (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Mach Claw",
			fr: "Instagriffe",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
