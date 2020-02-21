import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-177",
	localId: 177,

	// Card informations
	name: {
		en: "Audino",
		fr: "Nanméouïe",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 531,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/177/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/177/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/177/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/177/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},

	abilities: [{
		id: 742,
		type: AbilityType.TALENT,
		name: {
			en: "Hearing",
			fr: "Audition",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may draw a card.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez piocher une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drain Slap",
			fr: "Baffe Sangsue",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
