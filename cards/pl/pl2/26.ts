import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-26",
	localId: 26,

	// Card informations
	name: {
		en: "Jolteon",
		fr: "Voltali Niv. 43",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/26/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/26/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/26/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 363,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Undevelop",
			fr: "Dé-développer",
		},
		text: {
			en: "Once during your turn (before your attack), you may devolve Jolteon and put Jolteon into your hand. This power can't be used if Jolteon is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Voltali et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Voltali est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Evolving Thunder",
			fr: "Tonnerre évoluant",
		},
		text: {
			en: "If Jolteon evolved from Eevee during this turn, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si Voltali a évolué d'Evoli lors de ce tour, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
