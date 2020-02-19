import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW46",
	localId: "BW46",

	// Card informations
	name: {
		en: "Darkrai-EX",
		fr: "Darkrai ex",
	},

	hp: 180,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW46/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW46/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW46/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW46/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 261,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Cloak",
			fr: "Cape Obscure",
		},
		text: {
			en: "Each of your Pokémon that has any Darkness Energy attached to it has no Retreat Cost.",
			fr: "Chacun de vos Pokémon auquel de l'Énergie Darkness est attachée n'a pas de coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Night Spear",
			fr: "Javelot Nocturne",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card

