import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl",
			fr: "Rugissement"
		},

		effect: {
			en: "During your opponent’s next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance)."
		}
	}, {
		name: {
			en: "Gust",
			fr: "Tornade"
		},

		damage: 10
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Pidove",
		fr: "Poichigeon"
	},

	rarity: "None",
	hp: 40,
	types: ["Colorless"],

	thirdParty: {
		tcgplayer: 88055
	}
}

export default card