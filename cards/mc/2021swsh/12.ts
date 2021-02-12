import Card from "@tcgdex/sdk/interfaces/Card";
import Tag from "@tcgdex/sdk/interfaces/Tag";
import Category from "@tcgdex/sdk/interfaces/Category";
import Type from "@tcgdex/sdk/interfaces/Type";
import Rarity from "@tcgdex/sdk/interfaces/Rarity";
import set from '../../../sets/mc/2021swsh'

const card: Card = {

	// ids
	id: "2021swsh-12",
	localId: 12,

	// Card informations
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 391,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/22/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/22/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/22/high",
		},
	},

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Super Singe",
			fr: "Super Roussi",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: set
}

export default card
