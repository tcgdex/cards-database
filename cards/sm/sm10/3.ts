import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-3",
	localId: 3,

	// Card informations
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 11,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/3/high",
		},
	},

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},

	abilities: [{
		id: 38,
		type: AbilityType.TALENT,
		name: {
			en: "Emerge",
			fr: "Émerge",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, cherchez dans votre deck une carte qui évolue de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
