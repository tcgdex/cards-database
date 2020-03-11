import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-87",
	localId: 87,

	// Card informations
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/87/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/87/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/87/high",
		},
	},

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trample",
			fr: "Bousculade",
		},
		text: {
			en: "For each Benched Pokémon (both yours and your opponent's), flip a coin. If heads, this attack does 60 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Lancez une pièce pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). Si c’est face, cette attaque inflige 60 dégâts au Pokémon ciblé. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
