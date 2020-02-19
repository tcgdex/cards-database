import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-78",
	localId: 78,

	// Card informations
	name: {
		en: "Latios-GX",
		fr: "Latios-GX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/78/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/78/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},

	abilities: [{
		id: 1010,
		type: AbilityType.TALENT,
		name: {
			en: "Power Bind",
			fr: "Puissance Restreinte",
		},
		text: {
			en: "If you have 4 or fewer Pokémon in play, this Pokémon can't attack.",
			fr: "Si vous avez 4 Pokémon ou moins en jeu, ce Pokémon ne peut pas attaquer.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tag Purge",
			fr: "Escouade-Éclat",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from TAG TEAM Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon ESCOUADE.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Clear Vision-GX",
			fr: "Acuité-GX",
		},
		text: {
			en: "For the rest of this game, your opponent can't use any GX attacks. (You can't use more than 1 GX attack in a game.)",
			fr: "Pour le reste de cette partie, votre adversaire ne peut pas utiliser d’attaque GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

