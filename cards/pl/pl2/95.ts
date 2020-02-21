import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-95",
	localId: 95,

	// Card informations
	name: {
		en: "Team Galactic's Invention G-107 Technical Machine",
		fr: "Machine Technique  Invention G-107 de Team Galaxie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/95/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/95/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TECHNICALMACHINE,
		Tag.SP,
	],

	illustrator: {
		id: 90,
		name: "Makoto Imai"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez cette carte à 1 de vos Pokémon SP en jeu. Celui-ci peut utiliser l'attaque de cette carte à la place de la sienne. Lorsque le Pokémon auquel cette carte est attachée n'est plus un Pokémon SP, défaussez cette carte.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Porteur de dégâts",
		},
		text: {
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur le Pokémon auquel cette carte est attachée. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
