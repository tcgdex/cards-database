import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-101",
	localId: 101,

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/101/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/101/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/101/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Misa Tsutsui",

	abilities: [{
		id: 1322,
		type: AbilityType.TALENT,
		name: {
			en: "Heatproof",
			fr: "Ignifugé",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon Fire de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shady Stamp",
			fr: "Coup Louche",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
