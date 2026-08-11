import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'de-de': "Kramshef"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [430],

	hp: 90,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Murkrow",
		'fr-fr': "Cornebre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Bind",
				'fr-fr': "Étreinte d’ombre",
				'de-de': "Schattenbindung"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vengeance",
				'fr-fr': "Vengeance",
				'de-de': "Rache"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Darkness Pokémon in your discard pile.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon Darkness de votre pile de défausse.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jedes -Pokémon in deinem Ablagestapel zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279269,
				tcgplayer: 86162
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279269,
				tcgplayer: 86162
			}
		}
	],

}

export default card
