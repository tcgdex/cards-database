import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-27",
	localId: 27,

	// Card informations
	name: {
		en: "Mamoswine GL",
		fr: "Mammochon  Niv. 61",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 473,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/27/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/27/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/27/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 156,
		type: AbilityType.POKEBODY,
		name: {
			en: "Icy Aura",
			fr: "Aura glaciale",
		},
		text: {
			en: "As long as Mamoswine is your Active Pokémon, put 1 damage counter on each Active Pokémon (excluding Water Pokémon) (both yours and your opponent's) between turns.",
			fr: "Tant que Mammochon  est votre Pokémon Actif, placez 1 marqueur de dégât sur chaque Pokémon Actif (Pokémon Water exclus) (les vôtres et ceux de votre adversaire) entre deux tours.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Avalanche",
			fr: "Avalanche",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

