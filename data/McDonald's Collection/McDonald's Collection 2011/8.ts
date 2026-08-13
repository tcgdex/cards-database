import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [551],

	description: {
		en: "It moves along below the sand’s surface, except for its nose and eyes. A dark membrane shields its eyes from the sun.",
		de: "Wenn es sich durch den Sand gräbt, ragen nur noch Nase und Augen hervor. Die schwarze Haut dient als Augenschutz."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
			de: "Sandgrab"
		},

		damage: 30,

		effect: {
			en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
			de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
		}
	}],

	name: {
		en: "Sandile",
		fr: "Mascaïman",
		de: "Ganovil"
	},

	rarity: "None",
	hp: 70,
	types: ["Fighting"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281797,
				tcgplayer: 88913
			}
		}
	]
}

export default card

