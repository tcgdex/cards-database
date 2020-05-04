import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-39",
	localId: 39,

	// Card informations
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "nagimiso",

	abilities: [{
		id: 1303,
		type: AbilityType.TALENT,
		name: {
			en: "Snowed In",
			fr: "Enneigé",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
		}
	}],

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
