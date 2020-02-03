import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-20",
	localId: 20,

	// Card informations
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 668,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/20/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/20/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/20/high.png",
		},
	},

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 174,
		type: AbilityType.TALENT,
		name: {
			en: "Intimidating Mane",
			fr: "Crinière Intimidante",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Basic Pokémon.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon de base de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Fang",
			fr: "Croc Ardent",
		},
		text: {
			en: "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
			fr: "Vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

