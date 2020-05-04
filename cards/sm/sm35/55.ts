import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-55",
	localId: 55,

	// Card informations
	name: {
		en: "Hoopa",
		fr: "Hoopa",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "TOKIYA",

	abilities: [{
		id: 917,
		type: AbilityType.TALENT,
		name: {
			en: "Scoundrel Guard",
			fr: "Protection Malicieuse",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-GX or Pokémon-EX.",
			fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-GX ou les Pokémon-EX de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
