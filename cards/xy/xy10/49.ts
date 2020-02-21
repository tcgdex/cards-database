import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-49",
	localId: 49,

	// Card informations
	name: {
		en: "Carbink",
		fr: "Strassie",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 703,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/49/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/49/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 1419,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Keeper",
			fr: "Gardien d'Énergie",
		},
		text: {
			en: "Basic Energy attached to your Basic Pokémon can't be discarded by effects of your opponent's attacks, Abilities, or Trainer cards.",
			fr: "Les Énergies de base attachées à vos Pokémon de base ne peuvent pas être défaussées par les effets des attaques, des talents ou des cartes Dresseur de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
