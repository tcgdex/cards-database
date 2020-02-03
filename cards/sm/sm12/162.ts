import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-162",
	localId: 162,

	// Card informations
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 783,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/162/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/162/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/162/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/162/high.png",
		},
	},

	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 183,
		name: "Ryuta Fuse"
	},

	abilities: [{
		id: 1382,
		type: AbilityType.TALENT,
		name: {
			en: "Fighter's Roar",
			fr: "Rugissement de Combat",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-GX or Pokémon-EX, this Pokémon can evolve during the turn you play it.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou Pokémon-EX, ce Pokémon-ci peut évoluer pendant le tour où il est mis en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING
		],
		name: {
			en: "Dragonslice",
			fr: "Draco-Tranche",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

