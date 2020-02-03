import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-156",
	localId: 156,

	// Card informations
	name: {
		en: "Mr. Mime-GX",
		fr: "M. Mime-GX",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/156/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/156/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/156/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/156/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 964,
		type: AbilityType.TALENT,
		name: {
			en: "Magic Evens",
			fr: "Pair Magique",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by your opponent's attacks if that damage is exactly 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, or 260.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques de votre adversaire si le montant des dégâts est égal à 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240 ou 260.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Breakdown",
			fr: "Réaction",
		},
		text: {
			en: "For each card in your opponent's hand, put 1 damage counter on their Active Pokémon.",
			fr: "Pour chaque carte dans la main de votre adversaire, placez un marqueur de dégâts sur son Pokémon Actif.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Life Trick-GX",
			fr: "Astuce Vitale-GX",
		},
		text: {
			en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],





	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

