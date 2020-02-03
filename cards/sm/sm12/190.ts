import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm12/190/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/190/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/190/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/190/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 149,
		name: "aky CG Works"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée a l’attaque Dracogriffe, il peut utiliser l’attaque GX sur cette carte. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser cette attaque.)\n\nColorlessColorlessColorless Destruction Draconique GX 80×\nDéfaussez toute l’Énergie de base de ce Pokémon. Cette attaque inflige 80 dégâts pour chaque carte défaussée de cette façon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

