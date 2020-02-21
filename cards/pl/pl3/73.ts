import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-73",
	localId: 73,

	// Card informations
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/73/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/73/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/73/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
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
			Type.COLORLESS
		],
		name: {
			en: "Circling Dive",
			fr: "Plongeon en cercle",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch Ninjask with 1 of your Benched Pokémon.",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Échangez Ninjask avec 1 des Pokémon de votre Banc.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Parallel Drain",
			fr: "Tuyau parallèle",
		},
		text: {
			en: "Remove from 1 of your Pokémon the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
