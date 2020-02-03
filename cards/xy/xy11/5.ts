import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-5",
	localId: 5,

	// Card informations
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/5/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/5/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/5/high.png",
		},
	},

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fluffy Transport",
			fr: "Transport Coton",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Solar Step",
			fr: "Démarche Solaire",
		},
		text: {
			en: "This attack does 20 damage times the number of your remaining Prize cards.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de vos cartes Récompense.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

