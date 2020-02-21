import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-97",
	localId: 97,

	// Card informations
	name: {
		en: "Genesect-EX",
		fr: "Genesect ex",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/97/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/97/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 872,
		type: AbilityType.TALENT,
		name: {
			en: "Red Signal",
			fr: "Signal Rouge",
		},
		text: {
			en: "When you attach a Plasma Energy from your hand to this Pokémon, you may switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Lorsque vous attachez une Énergie Plasma de votre main à ce Pokémon, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Megalo Cannon",
			fr: "Mégalo Canon",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
