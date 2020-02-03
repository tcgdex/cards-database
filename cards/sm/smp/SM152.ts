import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM152",
	localId: "SM152",

	// Card informations
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 786,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM152/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM152/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM152/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM152/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},

	abilities: [{
		id: 1263,
		type: AbilityType.TALENT,
		name: {
			en: "Charmed Charm",
			fr: "Amulette Enchantée",
		},
		text: {
			en: "Whenever you attach a Pokémon Tool card that has \"Fairy Charm\" in its name from your hand to this Pokémon during your turn, you may leave your opponent's Active Pokémon Confused.",
			fr: "Chaque fois que vous attachez une carte Outil Pokémon avec « Amulette Féerique » dans son nom de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

