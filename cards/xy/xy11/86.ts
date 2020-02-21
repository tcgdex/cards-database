import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-86",
	localId: 86,

	// Card informations
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/86/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/86/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/86/high",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cruel Fang",
			fr: "Croc Cruel",
		},
		text: {
			en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Burn",
			fr: "Brûlure Obscure",
		},
		text: {
			en: "Discard as many Darkness Energy attached to your Pokémon as you like. This attack does 50 damage times the amount of Darkness Energy you discarded in this way.",
			fr: "Défaussez autant d’Énergies Darkness attachées à vos Pokémon que vous voulez. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie Darkness défaussées de cette façon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
