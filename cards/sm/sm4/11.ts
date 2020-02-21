import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-11",
	localId: 11,

	// Card informations
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 673,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/11/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/11/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/11/high",
		},
	},

	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},

	abilities: [{
		id: 875,
		type: AbilityType.TALENT,
		name: {
			en: "Sap Sipper",
			fr: "Herbivore",
		},
		text: {
			en: "This Pokémon's attacks do 80 more damage to your opponent's Grass Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 80 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Leech",
			fr: "Encornebois",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
