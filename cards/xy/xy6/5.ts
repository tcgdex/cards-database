import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-5",
	localId: 5,

	// Card informations
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/5/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/5/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/5/high.png",
		},
	},

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 758,
		type: AbilityType.TALENT,
		name: {
			en: "Miraculous Scales",
			fr: "Écailles Miraculeuses",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon-EX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon-EX de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

