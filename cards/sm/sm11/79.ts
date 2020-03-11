import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-79",
	localId: 79,

	// Card informations
	name: {
		en: "Jirachi-GX",
		fr: "Jirachi-GX",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/79/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/79/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1392,
		type: AbilityType.TALENT,
		name: {
			en: "Psychic Zone",
			fr: "Zone Psy",
		},
		text: {
			en: "Don't apply Psychic Weakness when Pokémon (both yours and your opponent's) take damage from attacks.",
			fr: "N’appliquez pas la Faiblesse Psychic lorsque les Pokémon (les vôtres et ceux de votre adversaire) subissent des dégâts d’attaques.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Star Search",
			fr: "Recherche Étoile",
		},
		text: {
			en: "Search your deck for an Energy card and attach it to 1 of your Psychic Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie dans votre deck et attachez-la à l’un de vos Pokémon Psychic. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Star Shield-GX",
			fr: "Bouclier Étoile-GX",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
			fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
