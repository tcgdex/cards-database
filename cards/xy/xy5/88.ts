import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-88",
	localId: 88,

	// Card informations
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 450,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/88/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/88/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/88/high",
		},
	},

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Resistance Desert",
			fr: "Résistance Désertique",
		},
		text: {
			en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon-EX.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-Edge",
			fr: "Damoclès",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
