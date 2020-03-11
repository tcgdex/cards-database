import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm11/195/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/195/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/195/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/195/high",
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
