import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Electivire",
		fr: "Elekable",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/25/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/25/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/25/high",
		},
	},

	evolveFrom: {
		en: "Electabuzz",
		fr: "Elektek",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 886,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Motor Drive",
			fr: "Motorisé",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for a Lightning Energy card and attach it to Electivire. This power can't be used if Electivire is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse une carte Énergie Lightning et l'attacher à Elekable. Ce pouvoir ne peut pas être utilisé si Elekable est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Discharge",
			fr: "Coup d'Jus",
		},
		text: {
			en: "Discard all Lightning Energy attached to Electivire. Flip a coin for each Lightning Energy you discarded. This attack does 50 damage times the number of heads.",
			fr: "Défaussez toutes les Énergies Lightning attachées à Elekable. Lancez une pièce pour chaque carte Énergie Lightning défaussée. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
		},
		damage: 50
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
