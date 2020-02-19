import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-29",
	localId: 29,

	// Card informations
	name: {
		en: "Mew",
		fr: "Mew",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/29/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/29/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/29/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1418,
		type: AbilityType.TALENT,
		name: {
			en: "Memories of Dawn",
			fr: "Souvenirs Originels",
		},
		text: {
			en: "This Pokémon can use the attacks of any of your Basic Pokémon in play. (You still need the necessary Energy to use each attack.)",
			fr: "Ce Pokémon peut utiliser les attaques de n'importe lequel de vos Pokémon de base en jeu. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Encounter",
			fr: "Rencontre",
		},
		text: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

