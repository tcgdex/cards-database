import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-52",
	localId: 52,

	// Card informations
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/52/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/52/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/52/high",
		},
	},

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Hover Hit",
			fr: "Coup de voltige",
		},
		text: {
			en: "The Retreat Cost for the Defending Pokémon is 0 until the end of your next turn.",
			fr: "Le Coût de retraite du Pokémon Défenseur est de 0 jusqu'à la fin de votre prochain tour.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crash Bomber",
			fr: "Bombardier écrasant",
		},
		text: {
			en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 20 damage plus 40 more damage. Then, discard a Special Energy card attached to the Defending Pokémon.",
			fr: "Si le Pokémon Défenseur possède des cartes Énergie spéciales, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Ensuite, défaussez une carte Énergie spéciale attachée au Pokémon Défenseur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
