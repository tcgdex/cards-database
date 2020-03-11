import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm11/203/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/203/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/203/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/203/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



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
