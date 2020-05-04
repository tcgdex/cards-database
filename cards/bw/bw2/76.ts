import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-76",
	localId: 76,

	// Card informations
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
	},

	hp: 150,

	type: [
		Type.METAL,
	],

	dexId: 601,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/76/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/76/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/76/high",
		},
	},

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Charge Beam",
			fr: "Rayon Chargé",
		},
		text: {
			en: "Attach an Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Zap Cannon",
			fr: "Élecanon",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon can't use Zap Cannon during your next turn.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
