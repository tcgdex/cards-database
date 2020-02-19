import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-9",
	localId: 9,

	// Card informations
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 617,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/9/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/9/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/9/high.png",
		},
	},

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Raid",
			fr: "Razzia Obscure",
		},
		text: {
			en: "If this Pokémon evolved from Shelmet during this turn, this attack does 40 more damage.",
			fr: "Si ce Pokémon a évolué d'Escargaume pendant ce tour, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Afterimage Strike",
			fr: "Frap'Invisible",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, évitez les dégâts.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

