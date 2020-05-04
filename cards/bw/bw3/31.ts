import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-31",
	localId: 31,

	// Card informations
	name: {
		en: "Jellicent",
		fr: "Moyade",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 593,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/31/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/31/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/31/high",
		},
	},

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 309,
		type: AbilityType.TALENT,
		name: {
			en: "Cursed Body",
			fr: "Corps Maudit",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "Does 20 more damage for each Water Energy attached to this Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
