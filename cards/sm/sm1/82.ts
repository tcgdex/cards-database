import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/82/high",
		},
	},

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},

	abilities: [{
		id: 227,
		type: AbilityType.TALENT,
		name: {
			en: "Rough Skin",
			fr: "Peau Dure",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Impact",
			fr: "Impact Aqua",
		},
		text: {
			en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
