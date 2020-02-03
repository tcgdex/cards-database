import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-16",
	localId: 16,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/16/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/16/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/16/high.png",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 688,
		type: AbilityType.TALENT,
		name: {
			en: "Escape",
			fr: "Évasion",
		},
		text: {
			en: "Once during your turn (before your attack), you may shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

