import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Chesnaught",
		fr: "Blindépique",
	},

	hp: 160,

	type: [
		Type.GRASS,
	],

	dexId: 652,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/14/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/14/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/14/high",
		},
	},

	evolveFrom: {
		en: "Quilladin",
		fr: "Boguérisse",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 73,
		type: AbilityType.TALENT,
		name: {
			en: "Spiky Shield",
			fr: "Pico-Défense",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Touchdown",
			fr: "Touchdown",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
