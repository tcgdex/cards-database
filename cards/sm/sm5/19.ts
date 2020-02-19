import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-19",
	localId: 19,

	// Card informations
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/19/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/19/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/19/high.png",
		},
	},

	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	abilities: [{
		id: 1159,
		type: AbilityType.TALENT,
		name: {
			en: "Incandescent Body",
			fr: "Corps Incandescent",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Brûlé.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Blaster",
			fr: "Explosif Enflammé",
		},
		text: {
			en: "You may discard 2 Energy from this Pokémon. If you do, this attack does 80 more damage.",
			fr: "Vous pouvez défausser 2 Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

