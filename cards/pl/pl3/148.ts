import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-148",
	localId: 148,

	// Card informations
	name: {
		en: "Articuno",
		fr: "Artikodin",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/148/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/148/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/148/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Diamond Dust",
			fr: "Poussière de diamant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
