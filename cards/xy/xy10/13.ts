import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-13",
	localId: 13,

	// Card informations
	name: {
		en: "Delphox",
		fr: "Goupelin",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 655,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/13/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/13/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/13/high.png",
		},
	},

	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flickering Flames",
			fr: "Flammes Vacillantes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psystorm",
			fr: "Tempête Psy",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to all Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon en jeu.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

