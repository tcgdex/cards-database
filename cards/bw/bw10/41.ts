import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-41",
	localId: 41,

	// Card informations
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 561,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 913,
		type: AbilityType.TALENT,
		name: {
			en: "Toolbox",
			fr: "Boîte à Outils",
		},
		text: {
			en: "This Pokémon may have up to 4 Pokémon Tool cards attached to it. (If this Pokémon loses this Ability, discard Pokémon Tool cards attached to this Pokémon until only 1 Pokémon Tool card remains.)",
			fr: "Jusqu'à 4 cartes Outil Pokémon peuvent être attachées à ce Pokémon. (Si ce Pokémon perd cette capacité spéciale, défaussez des cartes Outil Pokémon attachées à ce Pokémon jusqu'à ce qu'il ne lui reste qu'une seule carte Outil Pokémon.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
