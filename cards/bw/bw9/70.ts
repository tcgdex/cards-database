import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-70",
	localId: 70,

	// Card informations
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 553,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/70/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/70/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/70/high",
		},
	},

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Piston Headbutt",
			fr: "Coup de Piston",
		},
		text: {
			en: "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
			fr: "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncer",
		},
		damage: 80
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
