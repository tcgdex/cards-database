import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "It moves along below the sand’s surface, except for its nose and eyes. A dark membrane shields its eyes from the sun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable"
		},

		damage: 30,

		effect: {
			en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Sandile",
		fr: "Mascaïman"
	},

	rarity: "None",
	hp: 70,
	types: ["Fighting"],

	thirdParty: {
		tcgplayer: 88913
	}
}

export default card