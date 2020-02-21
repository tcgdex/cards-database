import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Trevenant",
		fr: "Desséliande",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 709,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/55/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/55/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/55/high",
		},
	},

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 84,
		type: AbilityType.TALENT,
		name: {
			en: "Forest's Curse",
			fr: "Maléfice Sylvain",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Item cards from his or her hand.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tree Slam",
			fr: "Tacle Arborescent",
		},
		text: {
			en: "This attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
