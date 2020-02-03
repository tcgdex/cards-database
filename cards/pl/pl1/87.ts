import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-87",
	localId: 87,

	// Card informations
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/87/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/87/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		name: {
			en: "Headache",
			fr: "Migraine",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during his or her next turn.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors de son prochain tour.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Latent Power",
			fr: "Puissance dormante",
		},
		text: {
			en: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon. Instead, Psyduck is now Confused.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque n'inflige pas de dégâts au Pokémon Défenseur. Psykokwak est alors Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

