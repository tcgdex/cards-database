import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-203",
	localId: 203,

	// Card informations
	name: {
		en: "Normalium Z: Tackle",
		fr: "Normazélite : Charge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/203/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/203/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/203/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/203/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée a l’attaque Charge, il peut utiliser l’attaque GX sur cette carte. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser cette attaque.)\n\nColorlessColorlessColorlessColorless Turbo-Charge Précipitée GX 200+\nLancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

