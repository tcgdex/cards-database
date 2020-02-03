import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-30",
	localId: 30,

	// Card informations
	name: {
		en: "Suicune",
		fr: "Suicune",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/30/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/30/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/30/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 508,
		type: AbilityType.TALENT,
		name: {
			en: "Wind Charm",
			fr: "Amulette Éolienne",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon. (Existing effects are not removed.)",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon. (Les effets déjà en action ne sont pas retirés.)",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

