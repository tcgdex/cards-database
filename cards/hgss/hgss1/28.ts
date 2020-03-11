import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Pichu",
		fr: "Pichu",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 172,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/28/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/28/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
			fr: "Joli visage endormi",
		},
		text: {
			en: "As long as Pichu is Asleep, prevent all damage done to Pichu by attacks.",
			fr: "Tant que Pichu reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Playground",
			fr: "Terrain de jeu",
		},
		text: {
			en: "Each player may search his or her deck for as many Basic Pokémon as he or she likes, put them onto his or her Bench, and shuffle his or her deck afterward. (You put your Pokémon on the Bench first.) Pichu is now Asleep.",
			fr: "Chaque joueur peut chercher dans son deck autant de Pokémon de base qu’il le souhaite, les mettre sur son Banc, puis mélanger son deck. (Vous devez être le premier à mettre vos Pokémon sur le Banc.) Pichu est maintenant Endormi.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
