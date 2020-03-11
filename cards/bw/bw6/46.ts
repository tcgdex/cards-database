import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-46",
	localId: 46,

	// Card informations
	name: {
		en: "Mew-EX",
		fr: "Mew-EX",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/46/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/46/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",

	abilities: [{
		id: 161,
		type: AbilityType.TALENT,
		name: {
			en: "Versatile",
			fr: "Polyvalent",
		},
		text: {
			en: "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
			fr: "Ce Pokémon peut utiliser les attaques de n'importe quel Pokémon en jeu (les vôtres et ceux de votre adversaire). (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Replace",
			fr: "Repositionnement",
		},
		text: {
			en: "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant d'Énergies attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
