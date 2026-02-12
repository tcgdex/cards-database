import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Naoki Saito",
	category: "Pokemon",

	description: {
		en: "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose."
	},
	

	types: ["Lightning",],

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tail Whip",
			fr: "Mimi-Queue"
		},

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire."
		}
	}, {
		name: {
			en: "Electro Ball",
			fr: "Boule Élek"
		},

		damage: 30
	}],

	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275062
	}
}

export default card