import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-56",
	localId: 56,

	// Card informations
	name: {
		en: "Bewear",
		fr: "Chelours",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 760,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/56/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/56/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/56/high.png",
		},
	},

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},

	abilities: [{
		id: 641,
		type: AbilityType.TALENT,
		name: {
			en: "Fluffy",
			fr: "Boule de Poils",
		},
		text: {
			en: "This Pokémon takes 30 less damage from the attacks of your opponent's non-Fire Pokémon (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques des Pokémon non Fire de votre adversaire (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross-Cut",
			fr: "Coupe Transversale",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

