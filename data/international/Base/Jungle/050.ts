import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'de-de': "Tragosso"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Snivel",
				'fr-fr': "Pleurnicherie",
				'de-de': "Geheule"
			},
			effect: {
				'en-us': "If the Defending Pokémon attacks Cubone during your opponent's next turn, any damage done by the attack is reduced by 20 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
				'fr-fr': "Si le Pokémon Défenseur attaque Osselait pendant le prochain tour de votre adversaire, les dégâts infligés par l'attaque sont réduits de 20 (après application de la Faiblesse et de la Résistance). (Si l'un des Pokémon bat en retraite, cet effet prend fin.)",
				'de-de': "Greift das verteidigende Pokémon Tragossi während des nächsten gegnerischen Zuges an, wird aller aufgrund dieses Angriffs zugefügte Schaden um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz abgerechnet wurden). (Kommt einer der beiden Pokémon auf die Bank, ist diese Wirkung nich weiter gültig.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Cubone.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur Osselait.",
				'de-de': "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Tragosso zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Because it never removes its skull helmet, no one has ever seen this Pokémon's real face.",
		'fr-fr': "Il ne retire jamais son casque en os. Personne n'a jamais vu le visage de ce Pokémon."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273847,
				tcgplayer: 45153
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273847,
				tcgplayer: 45153
			}
		}
	],
}

export default card
