import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-62",
	localId: 62,

	// Card informations
	name: {
		en: "Beartic",
		fr: "Polagriffe",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 614,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/62/high",
		},
	},

	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 59,
		name: "Mina Nakai"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Resolute Claws",
			fr: "Griffes Résolues",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blizzard Burn",
			fr: "Blizzard Étourdissant",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
