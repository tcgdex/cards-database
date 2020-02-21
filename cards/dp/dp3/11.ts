import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 189,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/11/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/11/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/11/high",
		},
	},

	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 883,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cotton Spore",
			fr: "Spore coton",
		},
		text: {
			en: "Whenever Jumpluff would be damaged by your opponent's attack, flip a coin. If heads, prevent all damage done to Jumpluff by that attack.",
			fr: "Lorsqu'une attaque de votre adversaire inflige des dégâts à Cotovol, lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Cotovol par cette attaque.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Cottonweed Punch",
			fr: "Poing de coton",
		},
		text: {
			en: "Flip 2 coins. Choose 1 of your opponent's Pokémon. For each heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez 2 pièces. Choisissez 1 des Pokémon de votre adversaire. Pour chaque face, cette attaque lui infige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
