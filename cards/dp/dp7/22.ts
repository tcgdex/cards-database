import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-22",
	localId: 22,

	// Card informations
	name: {
		en: "Rapidash",
		fr: "Rapidash",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/22/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/22/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/22/high",
		},
	},

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",

	abilities: [{
		id: 570,
		type: AbilityType.POKEBODY,
		name: {
			en: "Burning Mane",
			fr: "Crinière en flammes",
		},
		text: {
			en: "If Rapidash is your Active Pokémon and is damaged by an opponent's attack (even if Rapidash is Knocked Out), the Attacking Pokémon is now Burned.",
			fr: "Si Galopa est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Galopa est mis K.O), le Pokémon Attaquant est maintenant Brûlé.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rear Kick",
			fr: "Ruade",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Shooting Fire",
			fr: "Feu fusillant",
		},
		text: {
			en: "Discard 2 Fire Energy attached to Rapidash and choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Fire attachées à Galopa et choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
