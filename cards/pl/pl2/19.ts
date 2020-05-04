import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-19",
	localId: 19,

	// Card informations
	name: {
		en: "Flareon",
		fr: "Pyroli Niv. 38",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/19/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/19/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/19/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 363,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Undevelop",
			fr: "Dé-développer",
		},
		text: {
			en: "Once during your turn (before your attack), you may devolve Flareon and put Flareon into your hand. This power can't be used if Flareon is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Pyroli et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Pyroli est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
			fr: "Coud'keu",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Evolving Flare",
			fr: "Éclat évolutif",
		},
		text: {
			en: "If Flareon evolved from Eevee during this turn, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
			fr: "Si Pyroli évolue d'Evoli lors de ce tour, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
