import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-84",
	localId: 84,

	// Card informations
	name: {
		en: "Trapinch",
		fr: "Kraknoix Niv. 14",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 328,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/84/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/84/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/84/high.png",
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
		id: 443,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Gather Sand",
			fr: "Groupement de sable",
		},
		text: {
			en: "Once during your turn (before your attack), if Trapinch is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Trapinch.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Kraknoix est votre Pokémon Actif, vous pouvez chercher dans votre pile de défausse une carte Énergie Fighting et l'attacher à Kraknoix.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Grind",
			fr: "Écrase",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to Trapinch.",
			fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Kraknoix.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

