import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-73",
	localId: 73,

	// Card informations
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 630,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/73/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/73/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/73/high",
		},
	},

	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Blindside",
			fr: "Angle Mort",
		},
		text: {
			en: "Does 50 damage to 1 of your opponent's Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 50 dégâts à 1 des Pokémon de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Punishment",
			fr: "Punition",
		},
		text: {
			en: "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon de Niveau 2, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 40
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
		name: "Black & White",
		code: "bw1"
	}
}

export default card
