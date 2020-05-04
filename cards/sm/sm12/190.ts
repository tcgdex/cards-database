import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-190",
	localId: 190,

	// Card informations
	name: {
		en: "Dragonium Z: Dragon Claw",
		fr: "Dracozélite : Dracogriffe",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/190/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/190/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/190/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/190/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "aky CG Works",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée a l’attaque Dracogriffe, il peut utiliser l’attaque GX sur cette carte. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser cette attaque.)\n\nColorlessColorlessColorless Destruction Draconique GX 80×\nDéfaussez toute l’Énergie de base de ce Pokémon. Cette attaque inflige 80 dégâts pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
