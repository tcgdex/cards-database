import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-18",
	localId: 18,

	// Card informations
	name: {
		en: "Omastar",
		fr: "Amonistar",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/18/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},

	abilities: [{
		id: 407,
		type: AbilityType.TALENT,
		name: {
			en: "Restoring Beam",
			fr: "Rayon Réparateur",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Restored Pokémon and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Recréé dans votre deck et le placer sur votre Banc. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
