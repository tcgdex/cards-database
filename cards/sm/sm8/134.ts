import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-134",
	localId: 134,

	// Card informations
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},

	hp: 120,

	type: [
		Type.FAIRY,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/134/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/134/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/134/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/134/high",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Expand",
			fr: "Expansion",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Charmed Slap",
			fr: "Gifle Décorée",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card that has \"Fairy Charm\" in its name attached to it, this attack does 70 more damage.",
			fr: "Si une carte Outil Pokémon avec « Amulette Féerique » dans son nom est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 70
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
