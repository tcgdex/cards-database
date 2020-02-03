import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-195",
	localId: 195,

	// Card informations
	name: {
		en: "Flyinium Z: Air Slash",
		fr: "Aérozélite : Lame d’Air",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/195/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/195/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/195/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/195/high.png",
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
			fr: "Si le Pokémon auquel cette carte est attachée a l’attaque Lame d’Air, il peut utiliser l’attaque GX sur cette carte. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser cette attaque.)\n\nColorlessColorlessColorlessColorless Piqué Dynamique GX 180\nÉvitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

