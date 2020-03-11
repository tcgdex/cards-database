import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-13",
	localId: 13,

	// Card informations
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 637,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/13/high",
		},
	},

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "nagimiso",

	abilities: [{
		id: 1214,
		type: AbilityType.TALENT,
		name: {
			en: "Heat Cyclone",
			fr: "Cyclone de Chaleur",
		},
		text: {
			en: "Once during your turn (before your attack), you may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
