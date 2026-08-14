import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [519],

	description: {
		en: "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas.",
		de: "Ein Pokémon, das in der Stadt zu Hause ist. Es ist sehr zutraulich und bevölkert in Scharen öffentliche Plätze und Parks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl",
			fr: "Rugissement",
			de: "Heuler"
		},

		effect: {
			en: "During your opponent’s next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}, {
		name: {
			en: "Gust",
			fr: "Tornade",
			de: "Windstoß"
		},

		damage: 10
	}],

	name: {
		en: "Pidove",
		fr: "Poichigeon",
		de: "Dusselgurr"
	},

	rarity: "None",
	hp: 40,
	types: ["Colorless"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281800,
				tcgplayer: 88055
			}
		}
	]
}

export default card

