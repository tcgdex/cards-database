import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-142",
	localId: 142,

	// Card informations
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 791,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/142/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Misa Tsutsui",

	abilities: [{
		id: 1381,
		type: AbilityType.TALENT,
		name: {
			en: "Armor of the Sunne",
			fr: "Armure du Halo Solaire",
		},
		text: {
			en: "If you have Lunala in play, your Solgaleo and Lunala take 50 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Armor of the Sunne Ability at a time.",
			fr: "Si vous avez Lunala en jeu, vos Solgaleo et Lunala subissent 50 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Armure du Halo Solaire à la fois.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sol Fangs",
			fr: "Crocs Solaires",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
