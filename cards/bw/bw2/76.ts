import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw2/76/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/76/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/76/high.png",
		},
	},

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card

