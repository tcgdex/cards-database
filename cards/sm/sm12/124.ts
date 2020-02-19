import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-124",
	localId: 124,

	// Card informations
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 745,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/124/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/124/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/124/high.png",
		},
	},

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 143,
		name: "so-taro"
	},

	abilities: [{
		id: 1329,
		type: AbilityType.TALENT,
		name: {
			en: "Boiling Blood",
			fr: "Sang Bouillant",
		},
		text: {
			en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon's attacks cost ColorlessColorlessColorless less.",
			fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, les attaques de ce Pokémon coûtent ColorlessColorlessColorless de moins.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Voltage Claw",
			fr: "Griffe Volt",
		},
		text: {
			en: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.",
			fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

