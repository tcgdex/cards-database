import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-89",
	localId: 89,

	// Card informations
	name: {
		en: "Musharna",
		fr: "Mushana",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 518,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/89/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/89/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/89/high.png",
		},
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rest Well",
			fr: "Siesta",
		},
		text: {
			en: "Both Active Pokémon are now Asleep. During your next turn, this Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les deux Pokémon Actifs sont maintenant Endormis. Pendant votre prochain tour, les attaques de ce Pokémon infligent 100 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud’Boul",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

