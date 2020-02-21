import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-71",
	localId: 71,

	// Card informations
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/71/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/71/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 1208,
		type: AbilityType.TALENT,
		name: {
			en: "Earthen Aura",
			fr: "Aura Terrestre",
		},
		text: {
			en: "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.",
			fr: "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Peace Maker",
			fr: "Pacificateur",
		},
		text: {
			en: "If your opponent has an Ultra Beast in play, this attack does 30 more damage.",
			fr: "Si votre adversaire a une Ultra-Chimère en jeu, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
