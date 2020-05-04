import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-93",
	localId: 93,

	// Card informations
	name: {
		en: "Pokémon Contest Hall",
		fr: "La salle de concours Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/93/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/93/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Makoto Imai",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Une seule fois lors du tour de chaque joueur, si le Banc de ce joueur n'est pas plein, celui-ci peut lancer une pièce. Si c'est face, il ou elle choisit dans son deck un Pokémon de base et le place sur son Banc. Ensuite, il ou elle peut choisir dans son deck une carte Outil Pokémon et l'attacher à ce Pokémon. S'il ou elle a cherché une carte dans son deck, il ou elle mélange son deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
