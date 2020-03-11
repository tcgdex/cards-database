import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-137",
	localId: 137,

	// Card informations
	name: {
		en: "Yveltal-GX",
		fr: "Yveltal-GX",
	},

	hp: 180,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Absorb Vitality",
			fr: "Absorb Vitalité",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Evil",
			fr: "Mal Sonique",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 100
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Doom Count-GX",
			fr: "Décompte Tragique-GX",
		},
		text: {
			en: "If your opponent's Active Pokémon has exactly 4 damage counters on it, that Pokémon is Knocked Out. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire a exactement 4 marqueurs de dégâts, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
