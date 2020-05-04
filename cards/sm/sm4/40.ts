import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-40",
	localId: 40,

	// Card informations
	name: {
		en: "Mismagius",
		fr: "Magirêve",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/40/high",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "chibi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Chaos Wheel",
			fr: "Roue Chaotique",
		},
		text: {
			en: "Your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Outil Pokémon, Énergie spéciale ou Stade de sa main pendant son prochain tour.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Arts",
			fr: "Arts Occultes",
		},
		text: {
			en: "This attack does 20 damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
