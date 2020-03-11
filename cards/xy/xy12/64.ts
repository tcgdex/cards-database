import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-64",
	localId: 64,

	// Card informations
	name: {
		en: "Pidgeot-EX",
		fr: "Roucarnage-EX",
	},

	hp: 170,

	type: [
		Type.COLORLESS,
	],

	dexId: 18,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/64/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/64/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mirror Move",
			fr: "Mimique",
		},
		text: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does the same amount of damage to your opponent's Active Pokémon.",
			fr: "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire, cette attaque inflige la même quantité de dégâts au Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feather Lance",
			fr: "Lance Plume",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
