import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-23",
	localId: 23,

	// Card informations
	name: {
		en: "Froslass",
		fr: "Momartik",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 478,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/23/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/23/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/23/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 169,
		type: AbilityType.TALENT,
		name: {
			en: "Cursed Glare",
			fr: "Regard Maléfique",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't attach any Special Energy cards from his or her hand to his or her Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas attacher de carte Énergie spéciale de sa main à ses Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Blizzard",
			fr: "Blizzard",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
