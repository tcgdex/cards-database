import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-19",
	localId: 19,

	// Card informations
	name: {
		en: "Omastar BREAK",
		fr: "Amonistar TURBO",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/19/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/19/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/19/high",
		},
	},

	evolveFrom: {
		en: "Omastar",
		fr: "Amonistar",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 408,
		type: AbilityType.TALENT,
		name: {
			en: "Dangerous Tentacle",
			fr: "Tentacule Dangereux",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Pokémon-EX with his or her Active Pokémon.",
			fr: "Une seule fois pendant votre tour(avant votre attaque), vous pouvez échanger l'un des Pokémon-EX de Banc de votre adversaire avec son Pokémon Actif.",
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
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
