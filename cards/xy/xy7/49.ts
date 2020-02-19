import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-49",
	localId: 49,

	// Card informations
	name: {
		en: "Metagross",
		fr: "Métalosse",
	},

	hp: 150,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/49/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/49/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/49/high.png",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 1285,
		type: AbilityType.TALENT,
		name: {
			en: "Magnetic Warp",
			fr: "Distorsion Magnétique",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Cannon",
			fr: "Canon de Fer",
		},
		text: {
			en: "You may discard all Metal Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
			fr: "Vous pouvez défausser toutes les Énergies Metal attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

