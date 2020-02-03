import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-144",
	localId: 144,

	// Card informations
	name: {
		en: "Xerneas ◇",
		fr: "Xerneas ",
	},

	hp: 160,

	type: [
		Type.FAIRY,
	],

	dexId: 716,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/144/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/144/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/144/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/144/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1261,
		type: AbilityType.TALENT,
		name: {
			en: "Path of Life",
			fr: "Chemin de l’Existence",
		},
		text: {
			en: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Energy from your other Pokémon to it.",
			fr: "Une seule fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc pour devenir votre Pokémon Actif, vous pouvez déplacer autant d’Énergies que vous voulez de vos autres Pokémon vers lui.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Bright Horns",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "This Pokémon can't use Bright Horns during your next turn.",
		},
		damage: 160
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			fr: "Cornes Lumineuses",
		},
		text: {
			fr: "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

