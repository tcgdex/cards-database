import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-13",
	localId: 13,

	// Card informations
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/13/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/13/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/13/high",
		},
	},

	evolveFrom: {
		en: "Nosepass",
		fr: "Nasgnet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 377,
		type: AbilityType.POKEBODY,
		name: {
			en: "Steel Coating",
			fr: "Couche d'acier",
		},
		text: {
			en: "Any damage done to Probopass by your opponent's attacks is reduced by 10 for each Metal Energy attached to Probopass (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.",
			fr: "Tous dégâts infligés à Tarinorme par des attaques de votre adversaire sont réduits de 10 pour chaque Énergie Metal attachée à Tarinorme (après application de la Faiblesse et de la Résistance). Vous ne pouvez réduire de plus de 20 dégâts de cette façon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Bomber",
			fr: "Bombardier métallique",
		},
		text: {
			en: "Choose a number of your opponent's Benched Pokémon up to the amount of Metal Energy attached to Probopass. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Vous pouvez choisir autant de Pokémon de Banc de votre adversaire qu'il y a d'Énergie Metal attachée à Tarinorme. Cette attaque inflige 20 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
