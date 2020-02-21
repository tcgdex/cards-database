import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-41",
	localId: 41,

	// Card informations
	name: {
		en: "Greninja BREAK",
		fr: "Amphinobi TURBO",
	},

	hp: 170,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/41/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/41/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/41/high",
		},
	},

	evolveFrom: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1429,
		type: AbilityType.TALENT,
		name: {
			en: "Giant Water Shuriken",
			fr: "Sheauriken Géant",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard a Water Energy card from your hand. If you do, put 6 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser une carte Énergie Water de votre main. Dans ce cas, placez 6 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		name: {
			fr: "Règle des Évolutions TURBO",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
