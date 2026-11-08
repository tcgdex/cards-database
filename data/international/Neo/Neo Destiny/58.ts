import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Unown [P]",
		'fr-fr': "Zarbi P",
		'de-de': "Icognito P"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is believed that the variety of types of this Pokémon were created by evolutionary adaptation, as each possesses a different ability.",
		'fr-fr': "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},

	abilities: [{
		name: {
			'fr-fr': "[Perform]",
			'de-de': "Perform"
		},

		effect: {
			'fr-fr': "Si une attaque a infligé des dégâts à Zarbi [P] pendant le dernier tour de votre adversaire et si Zarbi [P] était votre Pokémon Actif, l'attaque Puissance cachée de Zarbi [P] inflige le même nombre de dégâts supplémentaires au Pokémon Défenseur. Ce pouvoir fonctionne même si Zarbi (P] est Confus.",
			'de-de': "Wenn ein Angriff im letzten Zug deines Gegners Icognito P Schaden zugefügt hat und icognito P dein Aktives Pokémon war, fügt Icognito Ps Angriff Kraftreserve dem verteidigenden Pokémon entsprechend viel zusätzlichen Schaden zu. Diese Power kann selbst dann verwendet werden, wenn Icognito P verwirrt ist."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274710,
				tcgplayer: 90227
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274710,
				tcgplayer: 90227
			}
		}
	]
}

export default card
