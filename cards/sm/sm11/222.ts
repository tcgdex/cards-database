import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-222",
	localId: 222,

	// Card informations
	name: {
		en: "Mewtwo & Mew-GX",
		fr: "Mewtwo et Mew-GX",
	},

	hp: 270,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/222/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/222/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/222/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/222/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 814,
		type: AbilityType.TALENT,
		name: {
			en: "Perfection",
			fr: "Perfection",
		},
		text: {
			en: "This Pokémon can use the attacks of any Pokémon-GX or Pokémon-EX on your Bench or in your discard pile. (You still need the necessary Energy to use each attack.)",
			fr: "Ce Pokémon peut utiliser les attaques de n’importe quel Pokémon-GX ou Pokémon-EX sur votre Banc ou dans votre pile de défausse. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Duo-GX",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 200
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Duo Miraculeux-GX",
		},
		text: {
			fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
