import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-15",
	localId: 15,

	// Card informations
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/15/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/15/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 378,
		type: AbilityType.POKEBODY,
		name: {
			en: "Slow Start",
			fr: "Début Calme",
		},
		text: {
			en: "Regigigas can't attack until your opponent has 3 or less Prize cards left.",
			fr: "Regigigas ne peut attaquer que s'il ne reste plus à votre adversaire qu'un maximum de 3 cartes Récompense.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Crush Grip",
			fr: "Presse",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 40 instead of 120.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, les dégâts de base de cette attaque sont de 40 au lieu de 120.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

