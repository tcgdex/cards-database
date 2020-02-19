import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-19",
	localId: 19,

	// Card informations
	name: {
		en: "Croconaw",
		fr: "Crocrodil",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 159,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/19/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/19/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/19/high.png",
		},
	},

	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 319,
		type: AbilityType.TALENT,
		name: {
			en: "Plunge",
			fr: "Plongeon",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may move all Energy from your Active Pokémon to this Pokémon. If you do, switch it with your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez déplacer toute l’Énergie de votre Pokémon Actif vers ce Pokémon. Dans ce cas, échangez-le avec votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

