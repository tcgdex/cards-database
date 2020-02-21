import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-103",
	localId: 103,

	// Card informations
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	hp: 150,

	type: [
		Type.DARKNESS,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/103/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/103/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/103/high",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 317,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Aura",
			fr: "Aura de Ténèbres",
		},
		text: {
			en: "All Energy attached to this Pokémon are Darkness Energy instead of their usual type.",
			fr: "Toutes les Énergies attachées à ce Pokémon sont des Énergies Darkness au lieu de leur type habituel.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Berserker Blade",
			fr: "Lame Folle",
		},
		text: {
			en: "Does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
