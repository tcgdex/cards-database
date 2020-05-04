import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-1",
	localId: 1,

	// Card informations
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/1/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/1/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/1/high",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 841,
		type: AbilityType.POKEBODY,
		name: {
			en: "Jamming",
			fr: "Encombrement",
		},
		text: {
			en: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
			fr: "Une fois que votre adversaire a joué une carte Supporter de sa main, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire. Vous ne pouvez pas utiliser plus d'1 Poké-Body Encombrement par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cluster Bolt",
			fr: "Groupe d'éclairs",
		},
		text: {
			en: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à Pharamp. Cette attaque inflige alors 20 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des cartes Énergie. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
