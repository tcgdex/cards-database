import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-3",
	localId: 3,

	// Card informations
	name: {
		en: "Torterra",
		fr: "Torterra",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 389,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/3/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/3/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/3/high",
		},
	},

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rumble Stomp",
			fr: "Piétinement Lourd",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
