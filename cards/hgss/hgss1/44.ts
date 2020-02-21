import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-44",
	localId: 44,

	// Card informations
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 174,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/44/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/44/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: -1,
		type: AbilityType.POKEBODY,
		name: {
			fr: "Joli visage endormi",
		},
		text: {
			fr: "Tant que Toudoudou reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Graffiti",
			fr: "Graffiti",
		},
		text: {
			en: "Igglybuff is now Asleep. During your opponent's next turn, the attack cost of each of the Defending Pokémon's attacks is Colorless more.",
			fr: "Toudoudou est maintenant Endormi. Au prochain tour de votre adversaire, le coût de l’attaque de chaque Pokémon Défenseur est plus élevé de Colorless.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
