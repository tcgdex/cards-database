import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-88",
	localId: 88,

	// Card informations
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 528,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/88/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/88/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/88/high",
		},
	},

	evolveFrom: {
		en: "Woobat",
		fr: "Chovsourir",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
			fr: "Ultrason",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Charming Stamp",
			fr: "Trace Charmante",
		},
		text: {
			en: "Your opponent chooses 1 of their own Pokémon. This attack does 90 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Votre adversaire choisit l’un de ses propres Pokémon. Cette attaque inflige 90 dégâts à ce Pokémon-là. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
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

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
