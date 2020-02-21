import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-63",
	localId: 63,

	// Card informations
	name: {
		en: "Reshiram",
		fr: "Reshiram",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/63/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/63/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 211,
		type: AbilityType.TALENT,
		name: {
			en: "Turboblaze",
			fr: "TurboBrasier",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may attach a Fire Energy card from your hand to 1 of your Dragon Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez attacher une carte Énergie Fire de votre main à l'un de vos Pokémon Dragon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Bright Wing",
			fr: "Ailes Lumineuses",
		},
		text: {
			en: "Discard a Fire Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
