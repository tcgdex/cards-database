import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Team Magma's Camerupt",
		fr: "Camérupt de la Team Magma",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/2/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/2/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/2/high.png",
		},
	},

	evolveFrom: {
		en: "Team Magma's Numel",
		fr: "Chamallot de la Team Magma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 55,
		type: AbilityType.TALENT,
		name: {
			en: "Burning Draft",
			fr: "Souffle Enflammé",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Fighting or Fire Energy card from your discard pile to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fighting ou Fire de votre pile de défausse à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flame Ball",
			fr: "Boule de Feu",
		},
		text: {
			en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
