import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-94",
	localId: 94,

	// Card informations
	name: {
		en: "Sunyshore City Gym",
		fr: "Le gymnase de Rivamar City",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/94/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/94/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Yusuke Ishikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Tous dégâts infligés par des attaques de Pokémon Lightning (les vôtres et ceux de votre adversaire) au Pokémon Défenseur ne sont pas affectés par la Résistance. Chaque Pokémon Lightning en jeu (les vôtres et ceux de votre adversaire) ne possède pas de Faiblesse.",
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
