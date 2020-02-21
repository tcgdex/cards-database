import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-63",
	localId: 63,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/63/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/63/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/63/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Vacuum Wave",
			fr: "Onde Vide",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 50
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Fight Alone",
			fr: "Combat Solitaire",
		},
		text: {
			en: "If you have fewer Pokémon in play than your opponent, this attack does 60 more damage for each Pokémon fewer you have in play.",
			fr: "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 60 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
