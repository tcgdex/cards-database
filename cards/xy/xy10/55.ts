import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-55",
	localId: 55,

	// Card informations
	name: {
		en: "Umbreon-EX",
		fr: "Noctali-EX",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/55/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/55/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Veil of Darkness",
			fr: "Voile des Ténèbres",
		},
		text: {
			en: "Discard as many cards as you like from your hand. Then, draw that many cards.",
			fr: "Défaussez autant de cartes que vous voulez de votre main. Ensuite, piochez autant de cartes.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Endgame",
			fr: "Phase Finale",
		},
		text: {
			en: "If your opponent's Mega Evolution Pokémon is Knocked Out by damage from this attack, take 2 more Prize cards.",
			fr: "Si le Pokémon Méga-Évolution de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez 2 cartes Récompense supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
