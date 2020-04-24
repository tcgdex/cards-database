import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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


	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",

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
