import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-74",
	localId: 74,

	// Card informations
	name: {
		en: "Diancie ◇",
		fr: "Diancie ",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 719,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/74/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/74/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/74/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/74/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1335,
		type: AbilityType.TALENT,
		name: {
			en: "Princess's Cheers",
			fr: "Vivats de Princesse",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, your Fighting Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Pokémon Fighting infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Diamond Rain",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "Heal 30 damage from each of your Benched Pokémon.",
		},
		damage: 90
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			fr: "Pluie de Diamants",
		},
		text: {
			fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

