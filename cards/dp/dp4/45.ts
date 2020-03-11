import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-45",
	localId: 45,

	// Card informations
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/45/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/45/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/45/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 99,
		type: AbilityType.POKEBODY,
		name: {
			en: "Magma Armor",
			fr: "Magmascudo",
		},
		text: {
			en: "Magcargo can't be Asleep or Paralyzed.",
			fr: "Volcaropod ne peut pas être Endormi ou Paralysé.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Lava Plume",
			fr: "Ébullilave",
		},
		text: {
			en: "You may discard the top card of your deck. If you do, the Defending Pokémon is now Burned.",
			fr: "Vous pouvez défausser la carte du dessus de votre deck. Le Pokémon Défenseur est alors Brûlé.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
